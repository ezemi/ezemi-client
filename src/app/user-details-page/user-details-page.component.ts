import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Order } from '../Models/order';
import { User } from '../Models/user';
import { AdminServiceService } from '../services/admin-service.service';

@Component({
  selector: 'app-user-details-page',
  templateUrl: './user-details-page.component.html',
  styleUrls: ['./user-details-page.component.css']
})
export class UserDetailsPageComponent implements OnInit {

  user:User;
  order:Order;

  constructor(  
    private aservice : AdminServiceService,
    public dialogref: MatDialogRef<UserDetailsPageComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: Order
  ) {
    //console.log(data);
    this.order = { ...data };
  }

 
  ngOnInit(): void {
  
    this.aservice.getUserByOrderId(this.order.orderId).subscribe(
      data=>{
        console.log(JSON.stringify(data));
        this.user = data;
        console.log(this.user);
      }
    );
   }

}
