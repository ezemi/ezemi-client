import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Order } from '../Models/order';
import { AdminServiceService } from '../services/admin-service.service';
import { UserDetailsPageComponent } from '../user-details-page/user-details-page.component';

@Component({
  selector: 'app-show-new-orders',
  templateUrl: './show-new-orders.component.html',
  styleUrls: ['./show-new-orders.component.css'],
})
export class ShowNewOrdersComponent implements OnInit {
  orders: Order[];
  icon: String;
  name: String;
  orderId: number;
  shipped: boolean = false;
  showprogress: boolean = false;

  toggleClass() {
    this.shipped = true;
  }

  constructor(
    private aservice: AdminServiceService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.aservice.getAllNonShippedOrders().subscribe((data) => {
      console.log(JSON.stringify(data));
      this.orders = data;
    });
  }

  displayedColumns: String[] = [
    'orderId',
    'product',
    'orderDate',
    'user',
    'installments',
    'emiAmount',
    'amountDue',
    'orderCost',
    'isShipped',
  ];

  shipProduct(orders) {
    this.showprogress = true;
    this.aservice.orderShipped(orders.orderId).subscribe((data) => {
      window.location.reload();
      this.showprogress = false;
    });
  }

  fetchUserDetials(obj) {
    let dialogref = this.dialog.open(UserDetailsPageComponent, {
      height: '450px',
      width: '550px',
      data: obj,
    });

    dialogref.afterClosed().subscribe((result) => {
      this.ngOnInit();
    });
  }
}
