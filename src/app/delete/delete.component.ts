import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Category } from '../Models/category';
import { AdminServiceService } from '../services/admin-service.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css'],
})
export class DeleteComponent implements OnInit {
  
  category : Category;

  constructor(
    private aservice : AdminServiceService,
    public dialogref: MatDialogRef<DeleteComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: Category
  ) {
    console.log(data);
    this.category = { ...data };
  }

  close() {
    this.dialogref.close();
  }
  ngOnInit(): void {}


  submitUpdateCategory(){
    console.log(this.category);
    this.aservice.updateCategoryDetails(this.category).subscribe((data) => {
      console.log(JSON.stringify(data));
    });

    this.ngOnInit();
  }
}

