import { Component, OnInit } from '@angular/core';
import { Product } from '../Models/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  constructor(private router: Router) {}
  productList: Product[];

  ngOnInit(): void {}

  onClick(pId: number) {
    this.router.navigate(['page-content/products', pId]);
  }
}
