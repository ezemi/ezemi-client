import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AddBankFormComponent } from '../add-bank-form/add-bank-form.component';
import { Bank } from '../Models/bank';
import { AdminServiceService } from '../services/admin-service.service';
@Component({
  selector: 'app-manage-bank',
  templateUrl: './manage-bank.component.html',
  styleUrls: ['./manage-bank.component.css'],
})
export class ManageBankComponent implements OnInit {
  banks: Bank[];
  constructor(
    public dialog: MatDialog,
    private aservice: AdminServiceService
  ) {}

  ngOnInit(): void {
    this.aservice.getallBanks().subscribe((data) => {
      console.log(JSON.stringify(data));
      this.banks = data;
    });
  }

  displayedColumns: String[] = ['BankId', 'BankName'];

  openAddBankForm() {
    let dialogref = this.dialog.open(AddBankFormComponent, {
      height: '350px',
      width: '500px',
    });

    dialogref.afterClosed().subscribe((result) => {
      this.ngOnInit();
    });
  }
}
