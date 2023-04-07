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

// @ts-ignore
const routes: Routes = [
  {path: '', redirectTo: 'Login', pathMatch: 'full'},

  // login - register
  { path: 'login-register', component: LoginregisterComponent },
  { path: 'reset', component: ResetComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
  { path: 'reset-password-done', component: ResetPasswordDoneComponent },

  //admin
  { path: 'admin/adminhome', component: AdminhomeComponent},
  { path: 'admin/addfood', component: AddfoodComponent},
  { path: 'admin/seefood', component: SeefoodComponent},
  { path: 'admin/editfood', component: EditfoodComponent },
  {path: 'admin/addfoodqty', component: AddfoodqtyComponent},
  {path: 'admin/viewusers', component: ViewCustomersComponent},
  //user

  { path: 'userhome', component: UserhomeComponent },
  { path: 'myprofile', component: MyprofileComponent },
  { path: 'editprofile', component: EditprofileComponent },
  { path: 'cart', component: CartComponent },
  { path: 'myorders', component: MyordersComponent},
  { path: 'vieworder', component: VieworderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
