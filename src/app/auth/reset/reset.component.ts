import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {FormControl, FormGroup, NgForm, Validators} from "@angular/forms";

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {
  msg: any = [];
  avail: boolean | undefined;
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }
  onSubmitForgot(f: NgForm) {
    //console.log("f submit");
    this.authService.reset(JSON.stringify(f.value))
      .subscribe(
        data => {
          // //console.log(data);
          if (data) {
            alert('An email was sent!!!')
            this.router.navigate(['/reset-password']);
          }
        },
        error => {
          console.error(error);
          this.router.navigate(['/error']);
        }
      )
  }
}
