import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css'],
})
export class TransactionsComponent implements OnInit {
  displayedColumns: string[] = [
    'TransactionId',
    'Date',
    'Amount',
    'TransactionMessage',
  ];
  dataSource = new MatTableDataSource<transactions>(TRANSACTION_LIST);
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
}
export interface transactions {
  TransactionId: number;
  Amount: number;
  Date: string;
  TransactionMessage: string;
}
const TRANSACTION_LIST: transactions[] = [
  {
    TransactionId: 257,
    Date: '01 - 05 - 20',
    Amount: 10000,
    TransactionMessage: 'Amount deducted for EMI installment',
  },
  {
    TransactionId: 458,
    Date: '05 - 08 - 16',
    Amount: 15000,
    TransactionMessage: 'Amount deducted for EMI installment',
  },
  {
    TransactionId: 128,
    Date: '07 - 01 - 12',
    Amount: 25000,
    TransactionMessage: 'Amount deducted for EMI installment',
  },
  {
    TransactionId: 613,
    Date: '04 - 05 - 21',
    Amount: 8000,
    TransactionMessage: 'Amount deducted for card activation',
  },
  {
    TransactionId: 778,
    Date: '22 - 01 - 17',
    Amount: 10000,
    TransactionMessage: 'Amount deducted for card EMI installment',
  },
  {
    TransactionId: 984,
    Date: '03 - 06 - 12',
    Amount: 5000,
    TransactionMessage: 'Amount deducted for card EMI installment',
  },
  {
    TransactionId: 146,
    Date: '14 - 01 - 18',
    Amount: 9000,
    TransactionMessage: 'Amount deducted for card EMI installment',
  },
  {
    TransactionId: 257,
    Date: '06 - 05 -20',
    Amount: 6000,
    TransactionMessage: 'Amount deducted for EMI installment',
  },
  {
    TransactionId: 114,
    Date: '17 - 08 - 21',
    Amount: 3500,
    TransactionMessage: 'Amount deducted for card activation',
  },
  {
    TransactionId: 900,
    Date: '16 - 05 - 14',
    Amount: 3000,
    TransactionMessage: 'Amount deducted for card activation',
  },
];
