import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EmiCard } from '../Models/emi-card';
import { LoginStatus } from '../Models/login-status';
import { Status } from '../Models/status';
import { UserServiceService } from '../services/user-service.service';
@Component({
  selector: 'app-activatecard',
  templateUrl: './activatecard.component.html',
  styleUrls: ['./activatecard.component.css'],
})
export class ActivatecardComponent implements OnInit {
  rowData: any;
  amount: string;
  loguser: LoginStatus;
  cstatus: Status;
  constructor(
    public dialogref: MatDialogRef<ActivatecardComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: EmiCard,
    private uservice: UserServiceService
  ) {
    console.log(data);
    this.rowData = { ...data };
  }

  ngOnInit(): void {
    if (this.rowData.cardType.cardTypeId == 1) {
      this.amount = '300';
    } else {
      this.amount = '500';
    }
    let email = JSON.parse(localStorage.getItem('loggedinuser')).email;

    this.uservice.getOtpforpayment(email).subscribe((data) => {
      this.correctOtp = data;
    });
  }

  otp: string = '';
  correctOtp: string = '';
  verified: boolean = false;

  verifyOtp() {
    if (this.correctOtp != '' && this.correctOtp == this.otp) {
      this.verified = true;
    } else {
      this.verified = false;
    }
  }

  close() {
    this.dialogref.close();
  }

  activateCard() {
    this.loguser = JSON.parse(localStorage.getItem('loggedinuser'));
    this.uservice.activateCard(this.loguser.userId).subscribe((data) => {
      // console.log(JSON.stringify(data));
      this.loguser.cardActivated = true;
      this.cstatus = data;
      localStorage.setItem('loggedinuser', JSON.stringify(this.loguser));
      if (this.cstatus != null) {
        this.close();
      }
    });
  }
}
