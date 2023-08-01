import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public toster:any = {};
  public avail: boolean = false;
  public msg: string = "";
  public count :any;
  private headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient, private router: Router) { }

  register(body: any) {
    return this.http.post(environment.api+'/register', body, {
      observe: 'body',
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
  }

  login(body: any) {
    return this.http.post(environment.api+'/login', body, {
      observe: 'body',
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
  }

  loggedIn() {
    return !!localStorage.getItem('token')
  }

  getToken() {
    return localStorage.getItem('token')
  }

  logoutUser() {
    localStorage.removeItem('token');
    localStorage.removeItem('userid');
    localStorage.removeItem('admin');
    localStorage.removeItem('user');
    this.router.navigate(['/'])
  }

  check() {
    return this.http.get(environment.api + "/check", { headers: this.headers });
  }

  reset(body: any) {
    return this.http.post(environment.api+'/reset', body, {
      observe: 'body',
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
  }

  resetpassworddone(body: any) {

    return this.http.post(environment.api+'/reset-password-done', body, {
      observe: 'body',
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
  }

  changepassword(body: any) {
    return this.http.post( environment.api+'/change-password', body, {
      observe: 'body',
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
  }


  setCount(c: number)
  {
    this.count=c;
  }

  getCount()
  {
    return this.count;
  }


  setMessage(msg:any,color:any)
  {
    this.toster.msg = msg;
    this.toster.color =color;
    setTimeout(() => {
      this.toster = {};
    }, 4000);
  }

  getMessage()
  {
    return this.toster;
  }
}
