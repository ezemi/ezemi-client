import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Address } from '../Models/address';
import { Status } from '../Models/status';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-update-address',
  templateUrl: './update-address.component.html',
  styleUrls: ['./update-address.component.css'],
})
export class UpdateAddressComponent implements OnInit {
  constructor(public dialogref: MatDialogRef<UpdateAddressComponent>,
              private userService: UserServiceService) {}
  address: Address = new Address();
  userId: number;
  addstatus:Status;

  close() {
    this.dialogref.close();
  }

  ngOnInit(): void {
    this.userId = JSON.parse(localStorage.getItem('loggedinuser')).userId;
    this.userService.getAddressByUserId(this.userId).subscribe((data) => {
      this.address = data;
    });
  }

  updateAddress() {
    this.userService
      .updateAddress(this.userId, this.address)
      .subscribe((data) => {
        this.addstatus=data;
        console.log(this.addstatus);
        if(this.addstatus!=null){
          this.close();
        }
      });
  }
}
