import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
import {NgToastService} from "ng-angular-popup";

interface FeedbackResponse {
  msg?: string;
  errormsg?: string;
}

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  public errorMessage: string | null = null;
  public styl: { backgroundColor: string } | null = null;

  constructor(
    private authService: AuthService,
    private router: Router,
    private userService: UserService,
    private toast:NgToastService
  ) {}

  ngOnInit(): void {
    this.check();
  }

  check(): void {
    this.authService.check().subscribe(
      (data: any) => {
        // console.log(data);
      },
      (error: HttpErrorResponse) => {
        if (error instanceof HttpErrorResponse) {
          this.authService.logoutUser();
          this.router.navigate(['/error']);
        }
        // console.log(error);
      }
    );
  }

  setMessage(msg: string, color: string): void {
    this.errorMessage = msg;
    this.styl = {
      backgroundColor: color,
    };
    setTimeout(() => {
      this.errorMessage = null;
    }, 4000);
  }

  onSubmit(f: NgForm): void {
    // console.log(f.value);
    this.userService.feedback(JSON.stringify(f.value)).subscribe(
      (data: FeedbackResponse) => {
        if (data.msg) {
          this.toast.success({detail :"Succes Message",summary :" Feedback sent successfully"})
          this.router.navigate(['/userhome']);
        }
        if (data.errormsg) {
          this.setMessage(data.errormsg, '#f04747');
        }
      },
      (error: HttpErrorResponse) => {
        if (error instanceof HttpErrorResponse) {
          this.authService.logoutUser();
          this.router.navigate(['/error']);
        }
        // console.log(error);
      }
    );
  }
}
