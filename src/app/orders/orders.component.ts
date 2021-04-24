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

  unpaidOrders: Order[];
  paidOrders: Order[] = [];

  displayedColumns: string[] = [
    'orderId',
    'product',
    'cost',
    'months',
    'emiAmount',
    'amountDue',
    'payNow',
  ];

  // @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  ngOnInit() {
    let userId = JSON.parse(localStorage.getItem('loggedinuser')).userId;

    this.userSerive.getUnPaidOrders(userId).subscribe((data) => {
      this.unpaidOrders = data;

      this.unpaidOrders.sort(
        (b, a) => +new Date(a.orderDate) - +new Date(b.orderDate)
      );
      this.unpaidOrders.forEach((order) => {
        order.canPay = this.canPay(order);
      });
    });

    this.userSerive.getPaidOrders(userId).subscribe((data) => {
      this.paidOrders = data;
      this.unpaidOrders.sort(
        (b, a) => +new Date(a.orderDate) - +new Date(b.orderDate)
      );
    });
    ///this.dataSource.paginator = this.paginator;
  }

  getPayDate(order: Order) {
    let rdt = new Date(order.orderDate);
    rdt.setMonth(rdt.getMonth() + order.installments);
    //console.log(rdt);
    //console.log(order.orderDate);

    return rdt;
  }

  canPay(order: Order) {
    let orderdt = new Date(order.orderDate);
    let currdt = new Date();
    //console.log(orderdt);
    //console.log(currdt);

    console.log(this.monthDiff(orderdt, currdt));
    if (this.monthDiff(orderdt, currdt) >= order.installments) {
      return true;
    }
    return false;
  }

  monthDiff(d1: Date, d2: Date) {
    let months;
    months = (d2.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth();
    months += d2.getMonth();
    return months <= 0 ? 0 : months;
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
