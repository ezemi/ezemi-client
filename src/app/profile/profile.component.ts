import { Component, OnInit } from '@angular/core';
import { ActivatecardComponent } from '../activatecard/activatecard.component';
import { LoginStatus } from '../Models/login-status';
import { User } from '../Models/user';
import { UserServiceService } from '../services/user-service.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { UpdateAddressComponent } from '../update-address/update-address.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  user: User;
  loguser: LoginStatus;
  outStrint: string = '';
  cstatus: string;
  constructor(public dialog: MatDialog, private uservice: UserServiceService) {}

  ngOnInit(): void {
    this.outStrint = '';
    this.loguser = JSON.parse(localStorage.getItem('loggedinuser'));
    this.uservice.getUserById(this.loguser.userId).subscribe((data) => {
      //console.log(JSON.stringify(data));
      this.user = data;
      for (var i = 0; i + 4 <= this.user.card.emiCardNo.length; i += 4) {
        this.outStrint =
          this.outStrint + this.user.card.emiCardNo.slice(i, i + 4) + '\t';
      }
      if (this.user.card.isActivated) {
        this.cstatus = 'Active';
      } else {
        this.cstatus = 'Inactive';
      }
    });
  }

  openActivateCardComponent(obj) {
    let dialogref = this.dialog.open(ActivatecardComponent, {
      height: '300px',
      width: '400px',
      data: obj,
    });

    dialogref.afterClosed().subscribe((result) => {
      this.ngOnInit();
    });
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
}
