import { TOUCH_BUFFER_MS } from '@angular/cdk/a11y';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../Models/product';
import { ProductServiceService } from '../services/product-service.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css'],
})
export class ProductdetailsComponent implements OnInit {
  product: Product;
  emimonths: number = 0;
  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = +this.activatedRoute.snapshot.params['productId'];
    this.productService.getProductByid(id).subscribe((data) => {
      this.product = data;
    });
  }

  orderNow() {
    sessionStorage.setItem('emimonths', this.emimonths.toString());
    sessionStorage.setItem('productId', this.product.productId.toString());
    this.router.navigate(['page-content/confirmOrder']);
  }
}
