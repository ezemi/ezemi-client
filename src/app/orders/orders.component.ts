import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Order } from '../Models/order';
import { PayemiComponent } from '../payemi/payemi.component';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent implements OnInit {
  constructor(
    private userSerive: UserServiceService,
    public dialog: MatDialog
  ) {}

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

  pay(order: Order) {
    //console.log(order);
    let dialogref = this.dialog.open(PayemiComponent, {
      height: '300px',
      width: '400px',
      data: order,
    });
    dialogref.afterClosed().subscribe((result) => {
      this.ngOnInit();
    });
  }
}
