import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginStatus } from '../Models/login-status';
import { LoginUser } from '../Models/login-user';
import { Status } from '../Models/status';
import { NavHeaderComponent } from '../nav-header/nav-header.component';
import { AccountServiceService } from '../services/account-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private accountService: AccountServiceService,
    private router: Router,
    private header: NavHeaderComponent
  ) {}

  hide1: boolean = true;
  logindto: LoginUser = new LoginUser();
  invalidCredentials: boolean = false;
  ngOnInit(): void {}

  user: LoginStatus;
  forgotpass() {
    this.router.navigate(['page-content/changepassword']);
  }

  login() {
    this.accountService.loginUser(this.logindto).subscribe((data) => {
      this.user = data;
      if (this.user.statusMsg == 'SUCCESS') {
        localStorage.setItem('loggedinuser', JSON.stringify(this.user));
        this.header.ngOnInit();
        if (this.user.role == 'CUSTOMER') {
          if (this.user.cardActivated == true) {
            this.router.navigate(['page-content/products']);
          } else {
            this.router.navigate(['page-content/profile']);
          }
        } else if (this.user.role == 'ADMIN') {
          this.router.navigate(['page-content/administration/newapplications']);
        }
      } else {
        if (this.user.role == 'CUSTOMER') {
          this.router.navigate(['page-content/registerationsuccessfull']);
        } else {
          this.invalidCredentials = true;
        }
      }
    });
  }
}
