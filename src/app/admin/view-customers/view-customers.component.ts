import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {HttpErrorResponse} from "@angular/common/http";
import {AdminService} from "../../services/admin.service";
import {NgToastService} from "ng-angular-popup";

@Component({
  selector: 'app-view-customers',
  templateUrl: './view-customers.component.html',
  styleUrls: ['./view-customers.component.css']
})
export class ViewCustomersComponent implements OnInit {
  public users: any;
  user:any;
  public errorMessage: any;
  public styl: any;
  public loading:any= true;
  constructor(private authService: AuthService, private router: Router, private adminService: AdminService,private toast:NgToastService) { }

  ngOnInit(): void {
    this.check()
    this.getData();
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

  getData() {
    this.adminService.getAlluser().subscribe(
      data => {
        if ((data as {[key: string]: any})['user']) {
          this.loading = false;
          this.user =((data as {[key: string]: any})['user']);
          //console.log(data);
        }
        if ((data as {[key: string]: any})['errormsg']) {
          //this.setMessage((data as {[key: string]: any})['errormsg']), "#f04747");

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


  block(id:any) {
      this.adminService.blockuser(id).subscribe(
        data => {

          this.getData();
          console.log(data)
          this.toast.success({detail :"Succes Message",summary :" User is blocked successfully"})
        }
      )

  }



  unblock(id:any) {

      this.adminService.unblockuser(id).subscribe(
        data => {

          this.getData();
          this.toast.success({detail :"Succes Message",summary :" User is unblocked successfully"})
          console.log(data)
        }
      )

  }
/*
  unblock(user: { _id: any; }) {
    var userid = user._id;
    this.adminService.unblockuser(userid).subscribe(
      data => {
        if ((data as {[key: string]: any})['msg']) {
          this.setMessage("successfully unblocked user", "#43b581");
        }
        if ((data as {[key: string]: any})['errormsg']) {
          this.setMessage( ((data as {[key: string]: any})['errormsg']), "#f04747");
        }
        this.getData();
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
*/

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
