import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Category } from '../Models/category';
import { Product } from '../Models/product';
import { Productdto } from '../Models/productdto';
import { ProductServiceService } from '../services/product-service.service';

@Component({
  selector: 'app-add-product-form',
  templateUrl: './add-product-form.component.html',
  styleUrls: ['./add-product-form.component.css']
})
export class AddProductFormComponent implements OnInit {

  categories:Category[];
  pdt : Productdto = new Productdto();

  constructor(private pservice : ProductServiceService) { }

  ngOnInit(): void {
    this.pservice.getallcategory().subscribe(
      data=>{
        console.log(JSON.stringify(data));
        this.categories= data;
      }
     );
  }

  onFileChange(event){
    this.pdt.productImgUrl = event.target.files[0];
  }

  file: File ;
  processFile(imageInput: any) {
    this.file = imageInput.files[0];
  }
  submitProduct(){
   
    let formdata= new FormData();
   
    formdata.append('productName',this.pdt.productName.toString());
    formdata.append('price',this.pdt.price.toString());
    formdata.append('productDetails',this.pdt.productDetails.toString());
    formdata.append('processingFee',this.pdt.processingFee.toString());
    formdata.append('categoryId',this.pdt.categoryId.toString());
    formdata.append('productImgUrl',this.file);
    

    this.pservice.addproduct(formdata).subscribe(
      data=>{
        console.log(JSON.stringify(data));
      }
    );
  }


}
