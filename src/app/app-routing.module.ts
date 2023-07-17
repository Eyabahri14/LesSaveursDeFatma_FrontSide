import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginregisterComponent} from "./auth/loginregister/loginregister.component";
import {ResetPasswordComponent} from "./auth/reset-password/reset-password.component";
import {ResetComponent} from "./auth/reset/reset.component";
import {ResetPasswordDoneComponent} from "./auth/reset-password-done/reset-password-done.component";
import {ViewCustomersComponent} from "./admin/view-customers/view-customers.component";
import {AddfoodComponent} from "./admin/addfood/addfood.component";
import {SeefoodComponent} from "./admin/seefood/seefood.component";
import {EditfoodComponent} from "./admin/editfood/editfood.component";
import {AddfoodqtyComponent} from "./admin/addfoodqty/addfoodqty.component";
import {AdminhomeComponent} from "./admin/adminhome/adminhome.component";
import {UserhomeComponent} from "./user/userhome/userhome.component";
import {MyprofileComponent} from "./user/myprofile/myprofile.component";
import {AdminGuard} from "./admin/admin.guard";
import {EditprofileComponent} from "./user/editprofile/editprofile.component";
import {CartComponent} from "./user/cart/cart.component";
import {MyordersComponent} from "./user/myorders/myorders.component";
import {VieworderComponent} from "./user/vieworder/vieworder.component";
import { FeedbackComponent } from './user/feedback/feedback.component';
import { UserGuard } from './user/user.guard';
import { ViewfeedbackComponent } from './admin/viewfeedback/viewfeedback.component';
import {OneorderviewComponent} from "./admin/oneorderview/oneorderview.component";
import {QrcodeComponent} from "./admin/qrcode/qrcode.component";


// @ts-ignore
const routes: Routes = [
  {path: '', redirectTo: 'login-register', pathMatch: 'full'},

  // login - register
  { path: 'login-register', component: LoginregisterComponent },
  { path: 'reset', component: ResetComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
  { path: 'reset-password-done', component: ResetPasswordDoneComponent },

  //admin
  { path: 'admin/adminhome', component: AdminhomeComponent, canActivate: [AdminGuard] },
  { path: 'admin/addfood', component: AddfoodComponent, canActivate: [AdminGuard]},
  { path: 'admin/seefood', component: SeefoodComponent, canActivate: [AdminGuard]},
  { path: 'admin/editfood', component: EditfoodComponent, canActivate: [AdminGuard] },
  {path: 'admin/addfoodqty', component: AddfoodqtyComponent, canActivate: [AdminGuard]},
  {path: 'admin/viewusers', component: ViewCustomersComponent, canActivate: [AdminGuard]},
  { path: 'admin/viewfeeback', component: ViewfeedbackComponent, canActivate: [AdminGuard] },
  { path: 'admin/vieworder', component: OneorderviewComponent, canActivate: [AdminGuard] },
  { path: 'admin/qrcode', component: QrcodeComponent, canActivate: [AdminGuard] },



  //user

  { path: 'userhome', component: UserhomeComponent, canActivate: [UserGuard]  },
  { path: 'myprofile', component: MyprofileComponent, canActivate: [UserGuard]  },
  { path: 'editprofile', component: EditprofileComponent, canActivate: [UserGuard]  },
  { path: 'cart', component: CartComponent , canActivate: [UserGuard] },
  { path: 'myorders', component: MyordersComponent, canActivate: [UserGuard] },
  { path: 'vieworder', component: VieworderComponent, canActivate: [UserGuard] },
  { path: 'feedback', component: FeedbackComponent, canActivate: [UserGuard] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
