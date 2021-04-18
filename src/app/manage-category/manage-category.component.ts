import { Component, OnInit } from '@angular/core';
import {MatDialog , MatDialogRef} from '@angular/material/dialog';
import { AddCateogryFormComponent } from '../add-cateogry-form/add-cateogry-form.component';
import {Category} from '../Models/category';


@Component({
  selector: 'app-manage-category',
  templateUrl: './manage-category.component.html',
  styleUrls: ['./manage-category.component.css']
})

export class ManageCategoryComponent implements OnInit {

  c:Category[] = [
    {
      categoryId:100 , categoryName:'Laptops'
    },
    {
     categoryId:101  , categoryName:'Smart Watch'
    },
    {
     categoryId:102 , categoryName:'Home Appliances'
    }
 ];
  constructor(public dialog:MatDialog) { }

  
  ngOnInit(): void {
  }

  displayedColumns:String[]=['CategoryId' , 'CategoryName', 'deleteCategory'];
  dataSource = this.c ; 

  openAddCategoryForm(){
    this.dialog.open(AddCateogryFormComponent, {height:'350px' , width:'500px'});
  }
}
