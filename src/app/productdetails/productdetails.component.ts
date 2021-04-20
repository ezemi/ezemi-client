import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../Models/product';
import { ProductServiceService } from '../services/product-service.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css'],
})
export class ProductdetailsComponent implements OnInit {
  product: Product;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductServiceService
  ) {}

  ngOnInit(): void {
    const id = +this.activatedRoute.snapshot.params['productId'];
    this.productService.getProductByid(id).subscribe((data) => {
      this.product = data;
    });
  }
}
