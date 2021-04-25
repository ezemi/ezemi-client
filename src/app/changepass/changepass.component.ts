import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChangePassDto } from '../Models/change-pass-dto';
import { AccountServiceService } from '../services/account-service.service';

@Component({
  selector: 'app-changepass',
  templateUrl: './changepass.component.html',
  styleUrls: ['./changepass.component.css'],
})
export class ChangepassComponent implements OnInit {
  changePassDto: ChangePassDto = new ChangePassDto();

  otp: string;
  enteredOtp: string = '';
  showerror: boolean = false;
  emailsend: Boolean = true;
  otpreceived: Boolean = false;
  otpverified: Boolean = false;
  confirmPass: string = '';
  passChanged = false;
  doesnotexist: boolean = false;

  constructor(
    private accountService: AccountServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  toggleToOtp() {
    this.accountService
      .getOtpTochangePass(this.changePassDto.email)
      .subscribe((data) => {
        this.otp = data;
        if (this.otp != 'FAILED') {
          this.emailsend = false;
          this.otpreceived = true;
        } else {
          this.doesnotexist = true;
        }
      });
  }

  verifyOtp() {
    if (this.otp == this.enteredOtp) {
      this.otpreceived = false;
      this.otpverified = true;
    } else {
      this.showerror = true;
    }
  }

  checkpass() {
    return (
      this.confirmPass != '' &&
      this.confirmPass != this.changePassDto.newPassword
    );
  }

  changePass() {
    this.accountService.changePass(this.changePassDto).subscribe((data) => {
      this.passChanged = true;
      this.confirmPass = '';
      this.changePassDto.newPassword = '';
    });
  }

  toLogin() {
    this.router.navigate(['page-content/login']);
  }
}
