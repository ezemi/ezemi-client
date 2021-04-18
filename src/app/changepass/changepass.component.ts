import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-changepass',
  templateUrl: './changepass.component.html',
  styleUrls: ['./changepass.component.css']
})
export class ChangepassComponent implements OnInit {

  isVerified:Boolean=false;
  constructor() { }

  ngOnInit(): void {
  }

  toggle(){
    this.isVerified=true;
  }
}
