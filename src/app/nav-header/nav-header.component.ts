import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.css']
})
export class NavHeaderComponent implements OnInit {

  constructor() { }

  loggedin:boolean = false;
  isAdmin:boolean=false;
  name:string = "max";


  ngOnInit(): void {
  }

}
