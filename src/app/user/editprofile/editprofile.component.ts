import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {

  public name: any;
  public contact: any;
  public email: any;
  public user: any;
  public errorMessage: any;
  public styl: any;
  public loading:any= true;
  userProfile= new FormGroup({
    name : new FormControl('',[Validators.required]),
    email : new FormControl('',[Validators.required]),
    contact : new FormControl('',[Validators.required])

  })
  constructor(private authService: AuthService, private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    this.check();
    this.loading = true
    this.getData();
  }

  getData() {
    this.userService.myprofile().subscribe(
      data => {
        // //console.log(data);
        if ((data as {[key: string]: any})['user']){
          this.loading = false;
          this.user = ((data as {[key: string]: any})['user'])
          this.name = this.user.name;
          this.email = this.user.email;
          this.contact = this.user.contact;
        }

        if ((data as {[key: string]: any})['errormsg']) {
          this.setMessage(((data as {[key: string]: any})['errormsg']), "#f04747");
        }
      },
      (error) => {
        if (error instanceof HttpErrorResponse) {
          this.authService.logoutUser();
          this.router.navigate(['/error'])
        }
        //console.log(error);
      }
    )
  }
  check() {
    this.authService.check().subscribe(
      data => {
        //console.log(data);
      },
      (error) => {
        if (error instanceof HttpErrorResponse) {
          this.authService.logoutUser();
          this.router.navigate(['/error'])
        }
        //console.log(error);
      }
    )
  }

  onSubmit() {

    this.userService.editprofile(this.userProfile.value)
      .subscribe(
        data => {

          if ((data as {[key: string]: any})['msg']) {
            this.authService.setMessage("successfully edited profile", "#43b581");
            if (((data as {[key: string]: any})['emailchange']) == "yes") {
              this.authService.logoutUser();
              this.router.navigate(['/'])
            }
            else {
              this.router.navigate(['/myprofile'])
            }
          }
          if  ((data as {[key: string]: any})['errormsg'])  {
            this.setMessage(((data as {[key: string]: any})['errormsg']) , "#f04747");
          }
        },
        error => {
          if (error instanceof HttpErrorResponse) {
            this.authService.logoutUser();
            this.router.navigate(['/error'])
          }
          //console.log(error);
        }

      )
  }

  setMessage(msg: any, color: any) {
    this.errorMessage = msg;
    this.styl = {
      backgroundColor: color,
    }
    setTimeout(() => {
      this.errorMessage = null;
    }, 4000);
  }
}
