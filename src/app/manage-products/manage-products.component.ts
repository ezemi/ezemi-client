import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AddProductFormComponent } from '../add-product-form/add-product-form.component';
import { Product } from '../Models/product';
@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.css'],
})
export class ManageProductsComponent implements OnInit {
  dt: Date = new Date(2018, 11, 24);
  p: Product[] = [
    {
      productId: 1001,
      productName: 'Laptop',
      price: 10000,
      productDetails: 'Its is Envy360x',
      processingFee: 900,
      dateAdded: this.dt,
      productImgUrl: 'empty',
    },
    {
      productId: 1002,
      productName: 'TV',
      price: 500000,
      productDetails: 'Its is SonyX',
      processingFee: 1000,
      dateAdded: this.dt,
      productImgUrl: 'empty',
    },
  ];
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  displayedColumns: String[] = [
    'ProductId',
    'ProductName',
    'price',
    'ProductDetails',
    'ProcessingFee',
    'DateAdded',
    'deleteProduct',
  ];
  dataSource = this.p;

  openAddProductForm() {
    this.dialog.open(AddProductFormComponent, {
      height: '500px',
      width: '600px',
    });
  }
}
