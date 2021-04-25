import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginStatus } from '../Models/login-status';
import { Product } from '../Models/product';
import { ProductServiceService } from '../services/product-service.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css'],
})
export class ProductdetailsComponent implements OnInit {
  appUser: LoginStatus;
  product: Product;

  isActivated: boolean = false;
  isLoggedin: boolean = false;
  // emimonths: number = 0;
  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (!!localStorage.getItem('loggedinuser')) {
      //console.log(JSON.parse(localStorage.getItem('loggedinuser')));

      this.isLoggedin = true;

      this.isActivated = JSON.parse(
        localStorage.getItem('loggedinuser')
      ).cardActivated;
      //console.log(this.creditLeft);
      //console.log(this.isActivated);
    }
    const id = +this.activatedRoute.snapshot.params['productId'];
    this.productService.getProductByid(id).subscribe((data) => {
      this.product = data;
    });
  }

  orderNow() {
    //sessionStorage.setItem('emimonths', this.emimonths.toString());
    if (this.isLoggedin) {
      sessionStorage.setItem('productId', this.product.productId.toString());
      this.router.navigate(['page-content/confirmOrder']);
    } else {
      this.router.navigate(['page-content/login']);
    }
  }
}
