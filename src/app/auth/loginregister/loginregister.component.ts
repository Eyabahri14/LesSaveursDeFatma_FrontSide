import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-loginregister',
  templateUrl: './loginregister.component.html',
  styleUrls: ['./loginregister.component.css']
})
export class LoginregisterComponent implements OnInit {
  msg: any = [];
  avail: boolean | undefined;
  public errorMessage: any;
  public styl :any;
  userLogin= new FormGroup({
    email : new FormControl('',[Validators.required]),
    password : new FormControl('',[Validators.required])

  })
  userRegister= new FormGroup({
    name : new FormControl('',[Validators.required]),
    email : new FormControl('',[Validators.required]),
    password :new FormControl('',[Validators.required]),
    contact : new FormControl('', [Validators.required])

  })
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {

    $(document).ready(function () {

      $("#sign-in-btn").click(function () {

        $(".containerr").removeClass("sign-up-mode");

      });

      $("#sign-up-btn").click(function () {
        $(".containerr").addClass("sign-up-mode");

      });

    });
  }


  login() {
    console.log(this.userLogin.value);

    if (this.userLogin.valid) {
      this.authService.login(this.userLogin.value).subscribe(
        data => {
          localStorage.setItem('token', ((data as {[key: string]: any})['token']));
          console.log(data);
          this.router.navigate(['/userhome']);


          if ((data as {[key: string]: any})['role'] == 'admin'){

            this.router.navigate(['/admin/adminhome']);
          }

            if ((data as {[key: string]: any})['blocked'] == true) {

              alert("You are blocked by Admin wait until admin unblock you!!!")
              this.avail = true;
              return;
            }




        },

        error => {
        }
      );
    }

  }


Register(){
    this.authService.register(this.userRegister.value).subscribe((res: any) => {
      alert('user added ');
      history.back();
    }, (err) => {
      console.log(err);

    })

}








  signinup() {
    this.msg = "";
    this.avail = false;
  }






}
