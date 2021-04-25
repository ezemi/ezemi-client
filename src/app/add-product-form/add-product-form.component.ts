import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Category } from '../Models/category';
import { Product } from '../Models/product';
import { Productdto } from '../Models/productdto';
import { Status } from '../Models/status';
import { ProductServiceService } from '../services/product-service.service';

@Component({
  selector: 'app-add-product-form',
  templateUrl: './add-product-form.component.html',
  styleUrls: ['./add-product-form.component.css'],
})
export class AddProductFormComponent implements OnInit {
  categories: Category[];
  pdt: Productdto = new Productdto();
  pstatus: Status;

  constructor(
    private pservice: ProductServiceService,
    public dialogref: MatDialogRef<AddProductFormComponent>
  ) {}

  ngOnInit(): void {
    this.pservice.getallcategory().subscribe((data) => {
      console.log(JSON.stringify(data));
      this.categories = data;
    });
  }

  close() {
    this.dialogref.close();
  }

  onFileChange(event) {
    this.pdt.productImgUrl = event.target.files[0];
  }

  fileSelected: boolean = false;
  file: File;
  processFile(imageInput: any) {
    this.file = imageInput.files[0];
    this.fileSelected = true;
  }
  submitProduct() {
    let formdata = new FormData();

    formdata.append('productName', this.pdt.productName.toString());
    formdata.append('price', this.pdt.price.toString());
    formdata.append('productDetails', this.pdt.productDetails.toString());
    formdata.append('processingFee', this.pdt.processingFee.toString());
    formdata.append('categoryId', this.pdt.categoryId.toString());
    formdata.append('productImgUrl', this.file);

    this.pservice.addproduct(formdata).subscribe((data) => {
      console.log(JSON.stringify(data));

      if (this.pstatus != null) {
        this.close();
      }
    });
  }
}
