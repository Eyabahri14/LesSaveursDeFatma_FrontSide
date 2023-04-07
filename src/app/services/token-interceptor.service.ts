import { Injectable, Injector } from '@angular/core';
import { AuthService } from './auth.service';
import {HttpInterceptor} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector:Injector) { }


  intercept(req: { clone: (arg0: { setHeaders: { Authorization: string; }; }) => any; }, next: { handle: (arg0: any) => any; })
  {
    let authService = this.injector.get(AuthService)
    let tokenizedReq = req.clone({
      setHeaders:{
        Authorization: 'Bearer ' + localStorage.getItem('token')
      }
    })
    return next.handle(tokenizedReq)
  }
}
