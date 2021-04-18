import { Component, OnInit } from '@angular/core';
import { Category } from '../Models/category';
import { ProductServiceService } from '../services/product-service.service';

@Component({
  selector: 'app-add-cateogry-form',
  templateUrl: './add-cateogry-form.component.html',
  styleUrls: ['./add-cateogry-form.component.css']
})
export class AddCateogryFormComponent implements OnInit {

  constructor(private pservice: ProductServiceService) { }

  category:Category=new Category();
  
  ngOnInit(): void {
  }

  submitCategory(){
    console.log(this.category);
    this.pservice.addcategory(this.category).subscribe(
      data =>{
        console.log(JSON.stringify(data));
      }
    );
  }
  
}
