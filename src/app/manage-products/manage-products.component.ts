import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AddProductFormComponent } from '../add-product-form/add-product-form.component';
import { Product } from '../Models/product';
import { ProductServiceService } from '../services/product-service.service';
import { UpdateProductComponent } from '../update-product/update-product.component';
@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.css'],
})
export class ManageProductsComponent implements OnInit {

  product: Product[];
  productStockToggle : boolean;
   

  constructor(
    public dialog: MatDialog,
    private pservice: ProductServiceService
  ) {}

  ngOnInit():void{
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
    'updateProduct',
  ];

  openAddProductForm() {
    let dialogref = this.dialog.open(AddProductFormComponent, {
      height: '550px',
      width: '650px',
    });

    dialogref.afterClosed().subscribe((result) => {
      this.ngOnInit();
    });
  }

  openUpdateProduct(obj){
    let dialogref = this.dialog.open(UpdateProductComponent, {height: '550px' , width : '650px', data:obj});

    dialogref.afterClosed().subscribe((result) => {
      this.ngOnInit();
    });
  }


 toggle(product){
   this.pservice.inStockToggle(product.productId).subscribe(
     data=>{
       console.log(JSON.stringify(data));
       this.ngOnInit();
       console.log(product.productId, product.inStock);
     }
   );
   
 }

}
