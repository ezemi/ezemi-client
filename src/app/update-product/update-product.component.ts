import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Category } from '../Models/category';
import { Product } from '../Models/product';
import { Productdto } from '../Models/productdto';
import { ProductServiceService } from '../services/product-service.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css'],
})
export class UpdateProductComponent implements OnInit {
  categories: Category[];
  pdt: Productdto;
  productId: number;

  constructor(
    public pservice: ProductServiceService,
    public dialogref: MatDialogRef<UpdateProductComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: Productdto
  ) {
    //console.log(data);
    this.pdt = { ...data };
  }

  ngOnInit(): void {
    this.pservice.getallcategory().subscribe((data) => {
      console.log(JSON.stringify(data));
      this.categories = data;
      console.log(this.pdt);
      console.log(this.pdt.productId);
    });
  }

  file: File;
  processUpdatedImage(imageInput) {
    this.file = imageInput.files[0];
  }

  updateProduct() {
    let formdata = new FormData();

    this.productId = this.pdt.productId;

    formdata.append('productName', this.pdt.productName.toString());
    formdata.append('price', this.pdt.price.toString());
    formdata.append('productDetails', this.pdt.productDetails.toString());
    formdata.append('processingFee', this.pdt.processingFee.toString());
    formdata.append('categoryId', this.pdt.categoryId.toString());
    formdata.append('productImgUrl', this.file);

    this.pservice
      .updateProductDetails(formdata, this.productId)
      .subscribe((data) => {
        console.log(JSON.stringify(data));
      });
  }
}
