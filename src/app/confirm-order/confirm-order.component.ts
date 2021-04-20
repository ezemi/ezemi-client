import { Component, OnInit } from '@angular/core';
import { Address } from '../Models/address';
import { Product } from '../Models/product';
import { ProductServiceService } from '../services/product-service.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-confirm-order',
  templateUrl: './confirm-order.component.html',
  styleUrls: ['./confirm-order.component.css'],
})
export class ConfirmOrderComponent implements OnInit {
  product: Product;
  address: Address;

  constructor(
    private productService: ProductServiceService,
    private userSerivce: UserService
  ) {}

  ngOnInit(): void {
    let prodId = +sessionStorage.getItem('productId');
    if (prodId != null || prodId != undefined) {
      this.productService.getProductByid(prodId).subscribe((data) => {
        this.product = data;
      });

      let userId = JSON.parse(localStorage.getItem('loggedinuser')).userId;
      this.userSerivce.getAddressByUserId(userId).subscribe((data) => {
        this.address = data;
      });
    }
  }
}
