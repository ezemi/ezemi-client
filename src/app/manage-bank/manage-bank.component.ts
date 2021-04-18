import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AddBankFormComponent } from '../add-bank-form/add-bank-form.component';
import { Bank } from '../Models/bank';
@Component({
  selector: 'app-manage-bank',
  templateUrl: './manage-bank.component.html',
  styleUrls: ['./manage-bank.component.css'],
})
export class ManageBankComponent implements OnInit {
  b: Bank[] = [
    {
      bankId: 1121,
      bankName: 'ICICI Bank',
    },
    {
      bankId: 1122,
      bankName: 'HDFC Bank',
    },
  ];
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  displayedColumns: String[] = ['BankId', 'BankName', 'deleteBank'];
  dataSource = this.b;

  openAddBankForm() {
    this.dialog.open(AddBankFormComponent, { height: '400px', width: '500px' });
  }
}
