import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginStatus } from '../Models/login-status';

@Component({
  selector: 'app-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.css'],
})
export class NavHeaderComponent implements OnInit {
  constructor(private router: Router) {}

  loggedin: boolean; // = false;
  role: string; // = 'admin';
  name: string; // = 'max';
  //appUser: AppUser;
  appUser: LoginStatus;

  ngOnInit(): void {
    this.appUser = JSON.parse(localStorage.getItem('loggedinuser'));
    console.log(this.appUser);
    if (this.appUser == null || this.appUser == undefined) {
      this.loggedin = false;
    } else {
      this.loggedin = true;
      this.role = this.appUser.role;
    }
  }

  logoutUser() {
    localStorage.removeItem('loggedinuser');
    this.ngOnInit();
    this.router.navigate(['welcome']);
  }
}
