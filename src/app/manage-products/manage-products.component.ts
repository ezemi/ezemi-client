import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AddProductFormComponent } from '../add-product-form/add-product-form.component';
import { Product } from '../Models/product';
import { ProductServiceService } from '../services/product-service.service';
@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.css'],
})
export class ManageProductsComponent implements OnInit {
  product: Product[];

  constructor(
    public dialog: MatDialog,
    private pservice: ProductServiceService
  ) {}

  ngOnInit(): void {
    this.pservice.getallproduct().subscribe((data) => {
      console.log(JSON.stringify(data));
      this.product = data;
    });
  }

  displayedColumns: String[] = [
    'ProductId',
    'ProductName',
    'price',
    'inStock',
    'ProcessingFee',
    'DateAdded',
    'ProductCategory',
    'deleteProduct',
  ];

  openAddProductForm() {
    let dialogref = this.dialog.open(AddProductFormComponent, {
      height: '500px',
      width: '600px',
    });
    dialogref.afterClosed().subscribe((result) => {
      this.ngOnInit();
    });
  }
}
