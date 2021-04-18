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
  productList: Product[] = [
    {
      productId: 1,
      productName: '',
      productDetails: '',
      processingFee: 200,
      productImgUrl: '../assets/images/pred23.png',
      dateAdded: new Date(),
      price: 69000,
    },
    {
      productId: 1,
      productName: '',
      productDetails: '',
      processingFee: 200,
      productImgUrl: '../assets/images/pred23.png',
      dateAdded: new Date(),
      price: 69000,
    },
    {
      productId: 1,
      productName: '',
      productDetails: '',
      processingFee: 200,
      productImgUrl: '../assets/images/pred23.png',
      dateAdded: new Date(),
      price: 69000,
    },
    {
      productId: 1,
      productName: '',
      productDetails: '',
      processingFee: 200,
      productImgUrl: '../assets/images/pred23.png',
      dateAdded: new Date(),
      price: 69000,
    },
    {
      productId: 1,
      productName: '',
      productDetails: '',
      processingFee: 200,
      productImgUrl: '../assets/images/pred23.png',
      dateAdded: new Date(),
      price: 69000,
    },
    {
      productId: 1,
      productName: '',
      productDetails: '',
      processingFee: 200,
      productImgUrl: '../assets/images/pred23.png',
      dateAdded: new Date(),
      price: 69000,
    },
  ];

  ngOnInit(): void {}

  onClick(pId: number) {
    this.router.navigate(['/products', pId]);
  }
}
