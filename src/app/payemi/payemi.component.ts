import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LoginStatus } from '../Models/login-status';
import { Order } from '../Models/order';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-payemi',
  templateUrl: './payemi.component.html',
  styleUrls: ['./payemi.component.css'],
})
export class PayemiComponent implements OnInit {
  order: Order;
  otp: string = '';
  correctOtp: string = '';
  verified: boolean = false;

  ngOnInit(): void {
    let email = JSON.parse(localStorage.getItem('loggedinuser')).email;

    this.userService.getOtpforpayment(email).subscribe((data) => {
      this.correctOtp = data;
    });
  }
  constructor(
    public dialogref: MatDialogRef<PayemiComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: Order,
    private userService: UserServiceService
  ) {
    this.order = data;
  }

  payemi() {
    this.userService.payEmi(this.order.orderId).subscribe((data) => {
      let appUser: LoginStatus = JSON.parse(
        localStorage.getItem('loggedinuser')
      );
      appUser.creditLeft = appUser.creditLeft + this.order.emiAmount;

      localStorage.setItem('loggedinuser', JSON.stringify(appUser));
      this.close();
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
}
