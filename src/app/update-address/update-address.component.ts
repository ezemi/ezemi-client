import { Component, OnInit } from '@angular/core';
import { Address } from '../Models/address';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-update-address',
  templateUrl: './update-address.component.html',
  styleUrls: ['./update-address.component.css'],
})
export class UpdateAddressComponent implements OnInit {
  constructor(private userService: UserServiceService) {}
  address: Address = new Address();
  userId: number;

  ngOnInit(): void {
    this.userId = JSON.parse(localStorage.getItem('loggedinuser')).userId;
    this.userService.getAddressByUserId(this.userId).subscribe((data) => {
      this.address = data;
    });
  }

  updateAddress() {
    this.userService
      .updateAddress(this.userId, this.address)
      .subscribe((data) => {});
  }
}
