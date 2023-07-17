import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginregisterComponent } from './auth/loginregister/loginregister.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {IndexnavbarComponent} from "./index/indexnavbar/indexnavbar.component";
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { ResetComponent } from './auth/reset/reset.component';
import { ResetPasswordDoneComponent } from './auth/reset-password-done/reset-password-done.component';
import { AdminNavComponent } from './admin/admin-nav/admin-nav.component';
import { OneuserviewComponent } from './admin/oneuserview/oneuserview.component';
import { ViewCustomersComponent } from './admin/view-customers/view-customers.component';
import { LoadingComponent } from './loading/loading/loading.component';
import {NgToastModule} from "ng-angular-popup";
import { AddfoodComponent } from './admin/addfood/addfood.component';
import { SeefoodComponent } from './admin/seefood/seefood.component';
import { EditfoodComponent } from './admin/editfood/editfood.component';
import { AddfoodqtyComponent } from './admin/addfoodqty/addfoodqty.component';
import { AdminhomeComponent } from './admin/adminhome/adminhome.component';
import { UserhomeComponent } from './user/userhome/userhome.component';
import { UserNavComponent } from './user/user-nav/user-nav.component';
import { MyprofileComponent } from './user/myprofile/myprofile.component';
import { MessageBoxComponent } from './message-box/message-box.component';
import { TokenInterceptorService } from './services/token-interceptor.service';
import {AdminGuard} from "./admin/admin.guard";
import {LoginGuard} from "./login.guard";
import { EditprofileComponent } from './user/editprofile/editprofile.component';
import { CartComponent } from './user/cart/cart.component';
import { MyordersComponent } from './user/myorders/myorders.component';
import { VieworderComponent } from './user/vieworder/vieworder.component';
import {NgxPrintModule} from "ngx-print";
import {CheckoutModule} from "paytm-blink-checkout-angular";
import { FeedbackComponent } from './user/feedback/feedback.component';
import { ViewfeedbackComponent } from './admin/viewfeedback/viewfeedback.component';
import { OneorderviewComponent } from './admin/oneorderview/oneorderview.component';
import { QrcodeComponent } from './admin/qrcode/qrcode.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginregisterComponent,
    IndexnavbarComponent,
    ResetPasswordComponent,
    ResetComponent,
    ResetPasswordDoneComponent,
    AdminNavComponent,
    OneuserviewComponent,
    ViewCustomersComponent,
    LoadingComponent,
    AddfoodComponent,
    SeefoodComponent,
    EditfoodComponent,
    AddfoodqtyComponent,
    AdminhomeComponent,
    UserhomeComponent,
    UserNavComponent,
    MyprofileComponent,
    MessageBoxComponent,
    EditprofileComponent,
    CartComponent,
    MyordersComponent,
    VieworderComponent,
    FeedbackComponent,
    ViewfeedbackComponent,
    OneorderviewComponent,
    QrcodeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgToastModule,
    NgxPrintModule,
    CheckoutModule
  ],
  providers: [AdminGuard,LoginGuard,{
    provide:HTTP_INTERCEPTORS,
      useClass:TokenInterceptorService,
     multi:true
  }],
  bootstrap: [AppComponent,
    IndexnavbarComponent
  ]
})
export class AppModule { }
