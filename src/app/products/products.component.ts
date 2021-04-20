import { Component, OnInit } from '@angular/core';
import { Product } from '../Models/product';
import { Router } from '@angular/router';
import { ProductServiceService } from '../services/product-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  constructor(
    private router: Router,
    private productSerive: ProductServiceService
  ) {}
  productList: Product[] = [];

  ngOnInit(): void {
    this.productSerive.getall().subscribe((data) => {
      this.productList = data;
    });
  }

  onClick(pId: number) {
    this.router.navigate(['page-content/products', pId]);
  }
}
