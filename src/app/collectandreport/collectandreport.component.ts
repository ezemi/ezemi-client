import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { User } from '../Models/user';
import { NewapplicantsComponent } from '../newapplicants/newapplicants.component';
import { AdminServiceService } from '../services/admin-service.service';

@Component({
  selector: 'app-collectandreport',
  templateUrl: './collectandreport.component.html',
  styleUrls: ['./collectandreport.component.css'],
})
export class CollectandreportComponent implements OnInit {
  nonApproved: User[];

  constructor(
    public dialog: MatDialog,
    private aservice: AdminServiceService
  ) {}

  ngOnInit(): void {
    this.aservice.getNotApprovedUser().subscribe((data) => {
      console.log(JSON.stringify(data));
      this.nonApproved = data;
    });
  }

  displayedColumns: String[] = [
    'userId',
    'firstname',
    'lastname',
    'email',
    'phoneNo',
    'viewUser',
  ];

  viewUser(obj) {
    let dialogref = this.dialog.open(NewapplicantsComponent, {
      height: '600px',
      width: '55%',
      data: obj,
    });

    dialogref.afterClosed().subscribe((result) => {
      window.location.reload();
    });
  }
}
