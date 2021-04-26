import { Component, Inject, OnInit, Optional } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { DenyapplicationComponent } from '../denyapplication/denyapplication.component';
import { Status } from '../Models/status';
import { User } from '../Models/user';
import { AdminServiceService } from '../services/admin-service.service';

@Component({
  selector: 'app-newapplicants',
  templateUrl: './newapplicants.component.html',
  styleUrls: ['./newapplicants.component.css'],
})
export class NewapplicantsComponent implements OnInit {
  rowData: User;

  constructor(
    public dialog: MatDialog,
    public dialogref: MatDialogRef<NewapplicantsComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: User,
    private adminService: AdminServiceService
  ) {
    console.log(data);
    this.rowData = { ...data };
  }

  status: Status;
  approveUser(userId: number) {
    this.adminService.approveUser(userId).subscribe((data) => {
      this.status = data;
    });
    this.dialogref.close();
  }
  ngOnInit(): void {
    console.log(this.rowData);
  }

  denyApplication() {
    let dialogref = this.dialog.open(DenyapplicationComponent, {
      height: 'auto',
      width: '550px',
      data: this.rowData.email,
    });

    dialogref.afterClosed().subscribe((result) => {
      setTimeout(function () {
        window.location.reload();
      }, 0);
    });
  }
}
