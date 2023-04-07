import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import {FormControl, FormGroup, NgForm, Validators} from "@angular/forms";

@Component({
  selector: 'app-reset-password-done',
  templateUrl: './reset-password-done.component.html',
  styleUrls: ['./reset-password-done.component.css']
})
export class ResetPasswordDoneComponent implements OnInit {

  msg: any = [];
  avail: boolean | undefined;
  constructor(private router: Router, private authService: AuthService) { }

  userResetPassword= new FormGroup({

    email : new FormControl('',[Validators.required]),
    otp :new FormControl('',[Validators.required]),
    password : new FormControl('', [Validators.required])

  })
  ngOnInit(): void {}

  ResetPass(){
    this.authService.resetpassworddone(this.userResetPassword.value).subscribe((res: any) => {
      this.authService.setMessage("Successfully Reset Password done!!", "#43b581");
      alert('password updated ');
      console.log(res)
    }, (err) => {
      console.log(err);

    })

  }




}



