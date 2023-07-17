import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  public avail: boolean = false;
  public msg: string = "";
  public orderid:any;
  public userid:any;
  private food: any;
  public qrcode:any;

  private headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient, private router: Router) { }


  getAllFood() {
    return this.http.get(environment.api + "/getallfooditem");
  }

  addfood(body: any) {
    return this.http.post(environment.api + "/addfood", body);
  }
  setFood(item :any) {
    this.food = item;
  }
  getFood() {
    return this.food;
  }

  editfoodwithimage(body: any) {
    return this.http.post(environment.api+ "/editfoodwithimage", body);
  }
  editfood(body: any) {
    return this.http.post(environment.api+ "/editfood", body);
  }
  deleteFood(id :any) {
    return this.http.delete(environment.api+ "/deletefood/" + id);
  }



  getAlluser() {
    return this.http.get(environment.api + "/getalluser");
  }

  blockuser(id: string) {
    return this.http.delete(environment.api + "/blockuser/" + id);
  }

  unblockuser(id: string) {
    return this.http.delete(environment.api + "/unblockuser/" + id);
  }


  setUserid(id: any)
  {
    this.userid = id;
  }

  getUserid()
  {
    return this.userid;
  }
  getAllOrder() {
    return this.http.get(environment.api + "/getallorders", { headers: this.headers });
  }

  updateOrderstatus(body:any) {
    return this.http.post(environment.api + "/updateorderstatus", body);
  }

  deleteOrder(id :any)
  {
    return this.http.delete(environment.api + "/deleteorder/" + id, { headers: this.headers });
  }

  setOrderid(id :any)
  {
    this.orderid = id;
  }

  getOrderid()
  {
    return this.orderid;
  }

  getOneOrder(id :any)
  {
    return this.http.get(environment.api + "/getoneorder/" + id, { headers: this.headers });
  }


  getOneUser(id :any)
  {
    return this.http.get(environment.api + "/getoneuser/" + id, { headers: this.headers });
  }

  getOrderHistory(date :any)
  {
    return this.http.get(environment.api + "/getorderhistory/" + date, { headers: this.headers });
  }

  updatePaymentstatus(body:any)
  {
    return this.http.post(environment.api + "/updatepaymentstatus", body);
  }

  getAllfeedback()
  {
    return this.http.get(environment.api + "/getallfeedback", { headers: this.headers });
  }

  deleteFeedback(id :any)
  {
    return this.http.delete(environment.api + "/deletefeedback/" + id, { headers: this.headers });
  }

  setQrcode(id:any)
  {
    this.qrcode = id;
  }

  getQrcode()
  {
    return this.qrcode;
  }

  generateQrcode(id :any)
  {
    return this.http.get(environment.api + "/getqrcode/" + id, { headers: this.headers });
  }

}
