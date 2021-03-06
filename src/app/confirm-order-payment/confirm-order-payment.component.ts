import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { OrderDto } from '../Models/order-dto';
import { Product } from '../Models/product';
import { ProductServiceService } from '../services/product-service.service';
import { UserServiceService } from '../services/user-service.service';
import { UpdateProductComponent } from '../update-product/update-product.component';

@Component({
  selector: 'app-confirm-order-payment',
  templateUrl: './confirm-order-payment.component.html',
  styleUrls: ['./confirm-order-payment.component.css'],
})
export class ConfirmOrderPaymentComponent implements OnInit {
  orderDto: OrderDto = new OrderDto();
  product: Product = new Product();
  amtToPay: number = 0;
  otp: string = '';
  correctOtp: string = '';
  verified: boolean = false;

  constructor(
    private router: Router,
    private userSerivce: UserServiceService,
    private productSerivce: ProductServiceService,
    public dialogref: MatDialogRef<ConfirmOrderPaymentComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: OrderDto
  ) {
    this.orderDto = { ...data };
    //console.log(this.orderDto);
  }

  ngOnInit(): void {
    this.productSerivce
      .getProductByid(this.orderDto.productId)
      .subscribe((data) => {
        this.product = data;
        if (this.orderDto.emimonths > 0) {
          this.amtToPay =
            (this.product.price + this.product.processingFee) /
            this.orderDto.emimonths;
        } else {
          this.amtToPay = this.product.price + this.product.processingFee;
        }
      });

    let email = JSON.parse(localStorage.getItem('loggedinuser')).email;

    this.userSerivce.getOtpforpayment(email).subscribe((data) => {
      this.correctOtp = data;
    });
  }
  close() {
    this.dialogref.close();
  }

  verifyOtp() {
    if (this.correctOtp != '' && this.correctOtp == this.otp) {
      this.verified = true;
    } else {
      this.verified = false;
    }
  }

  confirmOrder() {
    this.userSerivce.makeAnOrder(this.orderDto).subscribe((data) => {});
    sessionStorage.removeItem('productId');
    this.router.navigate(['page-content/viewOrder']);
    this.close();
  }
}
