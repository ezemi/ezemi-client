import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Order } from '../Models/order';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent implements OnInit {
  constructor() {}

  displayedColumns: string[] = [
    'OrderId',
    'Cost',
    'Months',
    'EmiAmount',
    'AmountDue',
    'PayNow',
  ];
  dataSource = new MatTableDataSource<Order>(ORDER_LIST);
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
}
const ORDER_LIST: Order[] = [
  {
    orderId: 257,
    orderCost: 12548,
    emiType: null,
    emiAmount: 10000,
    amountDue: 5000,
    product: null,
    orderDate: new Date('2019-01-16'),
    installments: 1,
  },
  {
    orderId: 458,
    orderCost: 58936,
    emiType: null,
    emiAmount: 15000,
    amountDue: 10000,
    orderDate: new Date('2019-01-16'),
    product: null,
    installments: 1,
  },
];
