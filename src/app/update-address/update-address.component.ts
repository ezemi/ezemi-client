import { Component, OnInit } from '@angular/core';
import { Address } from '../Models/address';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-update-address',
  templateUrl: './update-address.component.html',
  styleUrls: ['./update-address.component.css'],
})
export class UpdateAddressComponent implements OnInit {
  constructor(private userService: UserService) {}
  address: Address = new Address();

  ngOnInit(): void {
    let userId = JSON.parse(localStorage.getItem('loggedinuser')).userId;
    this.userService.getAddressByUserId(userId).subscribe((data) => {
      this.address = data;
    });
  }

  updateAddress() {}
}
