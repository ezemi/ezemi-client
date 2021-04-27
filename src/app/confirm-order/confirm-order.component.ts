import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmOrderPaymentComponent } from '../confirm-order-payment/confirm-order-payment.component';
import { Address } from '../Models/address';
import { Order } from '../Models/order';
import { OrderDto } from '../Models/order-dto';
import { Product } from '../Models/product';
import { ProductServiceService } from '../services/product-service.service';
import { UserServiceService } from '../services/user-service.service';
import { UpdateAddressComponent } from '../update-address/update-address.component';

@Component({
  selector: 'app-confirm-order',
  templateUrl: './confirm-order.component.html',
  styleUrls: ['./confirm-order.component.css'],
})
export class ConfirmOrderComponent implements OnInit {
  product: Product;
  address: Address;

  creditLeft: number = 0;
  orderDto: OrderDto = new OrderDto();

  constructor(
    public dialog: MatDialog,
    private productService: ProductServiceService,
    private userSerivce: UserServiceService
  ) {}

  ngOnInit(): void {
    this.orderDto.autoDebit = false;
    this.orderDto.emimonths = 0;

    this.creditLeft = JSON.parse(
      localStorage.getItem('loggedinuser')
    ).creditLeft;

    let prodId = +sessionStorage.getItem('productId');
    if (prodId != null || prodId != undefined) {
      this.productService.getProductByid(prodId).subscribe((data) => {
        this.product = data;
      });

      let userId = JSON.parse(localStorage.getItem('loggedinuser')).userId;
      this.userSerivce.getAddressByUserId(userId).subscribe((data) => {
        this.address = data;
      });

      this.orderDto.productId = prodId;
      this.orderDto.userId = userId;
    }
  }

  update() {
    let dialogref = this.dialog.open(UpdateAddressComponent, {
      height: '80%',
      width: '40%',
    });

    dialogref.afterClosed().subscribe((result) => {
      this.ngOnInit();
    });
  }

  confirmOrder() {
    let dialogref = this.dialog.open(ConfirmOrderPaymentComponent, {
      height: 'auto',
      width: 'auto',
      data: this.orderDto,
    });

    dialogref.afterClosed().subscribe((result) => {
      this.ngOnInit();
    });

    //this.userSerivce.makeAnOrder(this.orderDto).subscribe((data) => {});
  }
}
