import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
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
}
