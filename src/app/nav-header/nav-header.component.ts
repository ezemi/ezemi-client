import { Component, OnInit } from '@angular/core';
import { AppUser } from '../Models/app-user';

@Component({
  selector: 'app-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.css'],
})
export class NavHeaderComponent implements OnInit {
  constructor() {}

  loggedin: boolean = false;
  role: string = 'admin';
  name: string = 'max';
  appUser: AppUser;

  ngOnInit(): void {
    // this.appUser = JSON.parse(localStorage.getItem('appUser'));
    // if (this.appUser === null) {
    //   this.loggedin = false;
    // } else {
    //   this.role = this.appUser.role;
    // }
  }
}
