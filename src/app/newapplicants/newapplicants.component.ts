import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from '../Models/user';

@Component({
  selector: 'app-newapplicants',
  templateUrl: './newapplicants.component.html',
  styleUrls: ['./newapplicants.component.css']
})
export class NewapplicantsComponent implements OnInit {
  rowData: User;
 
  constructor(public dialogref : MatDialogRef<NewapplicantsComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data : User) {
    console.log(data);
    this.rowData = {...data};
  }

  ngOnInit(): void {
    console.log(this.rowData);
  }

}
