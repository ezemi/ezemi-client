import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Order } from '../Models/order';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent implements OnInit {
  constructor(private userSerive: UserServiceService) {}

  unpaidOrders: Order[] = [];
  paidOrders: Order[] = [];

  displayedColumns: string[] = [
    'OrderId',
    'Cost',
    'Months',
    'EmiAmount',
    'AmountDue',
    'PayNow',
  ];

  dataSourceUnpaid;
  dataSourcepaid;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  ngOnInit() {
    let userId = JSON.parse(localStorage.getItem('loggedinuser')).userId;

    this.userSerive.getUnPaidOrders(userId).subscribe((data) => {
      this.unpaidOrders = data;
      console.log(this.unpaidOrders);
      this.dataSourceUnpaid = new MatTableDataSource<Order>(this.unpaidOrders);
    });

    this.userSerive.getPaidOrders(userId).subscribe((data) => {
      this.paidOrders = data;
      console.log(this.paidOrders);
      this.dataSourcepaid = new MatTableDataSource<Order>(this.paidOrders);
    });

    ///this.dataSource.paginator = this.paginator;
  }
}
// const ORDER_LIST: Order[] = [
//   {
//     orderId: 257,
//     orderCost: 12548,
//     emiType: null,
//     emiAmount: 10000,
//     amountDue: 5000,
//     product: null,
//     orderDate: new Date('2019-01-16'),
//     installments: 1,
//   },
//   {
//     orderId: 458,
//     orderCost: 58936,
//     emiType: null,
//     emiAmount: 15000,
//     amountDue: 10000,
//     orderDate: new Date('2019-01-16'),
//     product: null,
//     installments: 1,
//   },
// ];
