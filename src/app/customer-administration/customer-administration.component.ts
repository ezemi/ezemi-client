import { Component, OnInit } from '@angular/core';
import { User } from '../Models/user';
import { AdminServiceService } from '../services/admin-service.service';

@Component({
  selector: 'app-customer-administration',
  templateUrl: './customer-administration.component.html',
  styleUrls: ['./customer-administration.component.css']
})
export class CustomerAdministrationComponent implements OnInit {

  approvedUser : User[];

  constructor(private aservice: AdminServiceService) { }

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
}
