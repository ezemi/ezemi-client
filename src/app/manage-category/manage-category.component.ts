import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AddCateogryFormComponent } from '../add-cateogry-form/add-cateogry-form.component';

import { Category } from '../Models/category';

import { DeleteComponent } from '../delete/delete.component';

import { ProductServiceService } from '../services/product-service.service';

@Component({
  selector: 'app-manage-category',
  templateUrl: './manage-category.component.html',
  styleUrls: ['./manage-category.component.css'],
})
export class ManageCategoryComponent implements OnInit {
  category: Category[];

  constructor(
    public dialog: MatDialog,
    private pservice: ProductServiceService
  ) {}

  ngOnInit(): void {
    this.pservice.getallcategory().subscribe((data) => {
      console.log(JSON.stringify(data));
      this.category = data;
    });
  }

  displayedColumns: String[] = ['CategoryId', 'CategoryName', 'deleteCategory'];
  //dataSource = this.category ;

  openAddCategoryForm() {
    let dialogref = this.dialog.open(AddCateogryFormComponent, {
      height: '350px',
      width: '500px',
    });

    dialogref.afterClosed().subscribe((result) => {
      this.ngOnInit();
    });
  }

  openDeleteComponent(obj) {
    let dialogref = this.dialog.open(DeleteComponent, {
      height: '200px',
      width: '400px',
      data: obj,
    });

    // dialogref.afterClosed().subscribe((result) => {
    //   this.deleteRowData(result.data);
    // });
  }

  //  deleteRowData(row_obj){
  //   this.category = this.category.filter((value,key)=>{
  //     return value.categoryId != row_obj.id;
  //   });
  // }
}
