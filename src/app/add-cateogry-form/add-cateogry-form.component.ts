import { Component, OnInit } from '@angular/core';
import { Category } from '../Models/category';

@Component({
  selector: 'app-add-cateogry-form',
  templateUrl: './add-cateogry-form.component.html',
  styleUrls: ['./add-cateogry-form.component.css']
})
export class AddCateogryFormComponent implements OnInit {

  constructor() { }

  category:Category=new Category();
  
  ngOnInit(): void {
  }

  submitCategory(){
    console.log(this.category);
  }
  
}
