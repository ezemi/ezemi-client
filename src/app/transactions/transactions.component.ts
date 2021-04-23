import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { LoginStatus } from '../Models/login-status';
import { Transaction } from '../Models/transaction';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css'],
})
export class TransactionsComponent implements OnInit {
  transacts: Transaction[] = [];
  loguser: LoginStatus;

  constructor(private uservice: UserServiceService) {}
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatPaginator) dataSource: MatTableDataSource<Transaction>;

  ngOnInit() {
    // this.dataSource.paginator = this.paginator;
    this.loguser = JSON.parse(localStorage.getItem('loggedinuser'));
    this.uservice
      .getTransactionByUserId(this.loguser.userId)
      .subscribe((data) => {
        console.log(JSON.stringify(data));
        this.transacts = data;
        // console.log(this.transacts);
        this.dataSource = new MatTableDataSource(this.transacts);
        this.dataSource.paginator = this.paginator;
      });
  }

  displayedColumns: string[] = [
    'TransactionId',
    'Date',
    'Amount',
    'TransactionMessage',
  ];
}
