import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
import { WebsocketService } from 'src/app/services/websocket.service';
import {NgToastService} from "ng-angular-popup";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items: any=[];
  total: any;
  arr: any =[];
  public errorMessage: any;
  public styl: any;
  public loading:any= true;
  constructor(private router: Router, private authService: AuthService, private userService: UserService, private webSocketService: WebsocketService,private toast:NgToastService) { }

  ngOnInit(): void {
    if (this.authService.getCount() == 0) {
      this.authService.setCount(0);
      this.router.navigate(['/empty-cart']);
    }
    this.webSocketService.listen('cart').subscribe(
      (data) => {
        //console.log(data);
        this.getdata();
      }
    )
    this.loading = true
    this.check();
    this.getdata();
  }


  getdata() {
    this.userService.getcart().subscribe(
      data => {
        // //console.log(data);
        if((data as {[key: string]: any})['errormsg']){
          this.setMessage(((data as {[key: string]: any})['errormsg']), "#f04747");
        }
        if ( ((data as {[key: string]: any})['empty']) == true) {
          this.authService.setCount(0);
          this.router.navigate(['/empty-cart']);
        }
        else {
          this.loading = false
          //console.log(data);
          // @ts-ignore
          this.arr = data[0];
          //console.log(this.arr);
          if (this.arr == undefined) {
            this.authService.setCount(0);
            this.router.navigate(['/empty-cart']);
          }
          else {

            this.items = this.arr['items'];
            this.total = this.arr['total'];
          }
        }

        // //console.log(this.items);
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
        if (data) {
          this.getdata();
        }
        // //console.log(data.total);
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

  delete(item: any) {
    //console.log("delte");
    //console.log(item);
    this.loading = true
    this.userService.deleteFromCart(item).subscribe(
      data => {
        //console.log(data);
        this.loading = false
        this.setMessage("successfully deleted item", "#f04747");
        // //console.log(data.total);
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



  setMessage(msg: any, color: any) {
    this.errorMessage = msg;
    this.styl = {
      backgroundColor: color,
    }
    setTimeout(() => {
      this.errorMessage = null;
    }, 4000);
  }
/*
  placeorder() {
    //console.log("place order");
    this.userService.placeOrder({}).subscribe(
      data => {
        console.log(data)
        if ((data as {[key: string]: any})['errormsg']){
          this.setMessage(((data as {[key: string]: any})['errormsg']), "#f04747");
        }
        if ((data as {[key: string]: any})['msg']) {
          // this.setMessage(data['msg'], "#43b581");
          this.authService.setMessage("successfully order placed", "green");
          this.router.navigate(['/myorders'])
        }
      },
      (error) => {
        if (error instanceof HttpErrorResponse) {
          this.authService.logoutUser();
          this.router.navigate(['/error'])
        }
      }
    )
  }
  */

  checkout()
  {

    this.userService.deletecart().subscribe(
      data => {

        if(((data as {[key: string]: any})['msg'])=="order placed")
        {

          this.toast.success({detail :"Succes Message",summary :"sucessfully order place"})
          this.authService.avail=true;
          this.router.navigate(['/userhome'])
        }
      },
      error => {
        console.log(error);
      }
    )
  }


}
