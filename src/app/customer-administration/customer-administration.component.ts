import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { User } from '../Models/user';
import { NewapplicantsComponent } from '../newapplicants/newapplicants.component';
import { AdminServiceService } from '../services/admin-service.service';

@Component({
  selector: 'app-customer-administration',
  templateUrl: './customer-administration.component.html',
  styleUrls: ['./customer-administration.component.css']
})
export class CustomerAdministrationComponent implements OnInit {

  approvedUser : User[];

  constructor(private aservice: AdminServiceService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.aservice.getApprovedUsers().subscribe(
      data=>{
        console.log(JSON.stringify(data));
        this.approvedUser = data;
      }
    );
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
      width: '70%',
      data: obj,
    });

    dialogref.afterClosed().subscribe((result) => {
      this.ngOnInit();
    });
  }

}
