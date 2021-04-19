import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Category } from '../Models/category';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  rowData : any ;

  constructor(public dialogref : MatDialogRef<DeleteComponent>,
      @Optional() @Inject(MAT_DIALOG_DATA) public data : Category) {
      console.log(data);
      this.rowData = {...data};
    }

  ngOnInit(): void {
  }

 

 
}
