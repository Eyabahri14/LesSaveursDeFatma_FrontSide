import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../src/environments/environment';
import {Observable} from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class UserService {

  public avail: boolean = false;
  public msg: string = "";
  public orderid:any;
  // private baseUri: string = "http://localhost:3000/user/";
  private headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor( private http: HttpClient, private router: Router) { }


  myprofile() {
    return this.http.get(environment.api + "/myprofile");
  }

  editprofile(body: any) {
    return this.http.post(environment.api + "/editprofile", body);
  }

    getAllFood() {
    return this.http.get(environment.api + "/getallfooditem");
  }

  addtocart(body: any) {
    return this.http.post(environment.api + "/addtocart", body, {
      observe: 'body',
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
  }

  getCount()
  {
    return this.http.get(environment.api  + "/getcount", { headers: this.headers });
  }

  getcart()
  {
    return this.http.get(environment.api  + "/getcart", { headers: this.headers });
  }


  deleteFromCart(body: any)
  {
    return this.http.post(environment.api + "/deletefromcart", body, {
      observe: 'body',
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
  }

  placeOrder(body: any) {
    return this.http.post(environment.api +"/placeorder", body)
  }

  deletecart()
  {
    return this.http.post(environment.api + "/placeorder", { headers: this.headers });
  }


  getAllOrder() {
    return this.http.get(environment.api  + "/getalluserorders", { headers: this.headers });
  }

  setOrderid(id: any)
  {
    this.orderid = id;
  }

  getOrderid()
  {
    return this.orderid;
  }

  getOneOrder(id: string)
  {
    return this.http.get(environment.api  + "/getoneorder/" + id, { headers: this.headers });
  }

  paytm(body: any) {
    return this.http.post(environment.api + "/paymentdoneweb", body )}

  checkout(body: any) {
    return this.http.post(environment.api + "/checkout", body, {
      observe: 'body',
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });}

  makePayment(stripeToken: any): Observable<any>{
    const url = "http://localhost:3000/checkout/"

    return this.http.post<any>(url,{token:stripeToken})
  }

  feedback(body: any) {
    return this.http.post(environment.api + "/sendfeedback", body, {
      observe: 'body',
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
  }


  }
