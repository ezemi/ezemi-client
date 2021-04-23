import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Denyapplicationdto } from '../Models/denyapplicationdto';
import { AdminServiceService } from '../services/admin-service.service';

@Component({
  selector: 'app-denyapplication',
  templateUrl: './denyapplication.component.html',
  styleUrls: ['./denyapplication.component.css'],
})
export class DenyapplicationComponent implements OnInit {
  email: String;
  msg: String;
  constructor(
    public dialogref: MatDialogRef<DenyapplicationComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: String,
    private aservice: AdminServiceService
  ) {
    console.log(data);
    this.email = data;
  }

  dto: Denyapplicationdto = new Denyapplicationdto();
  denyApplication() {
    this.dto.email = this.email.toString();
    this.dto.msg = this.msg.toString();
    this.aservice.denyApplication(this.dto).subscribe((data) => {});
    this.dialogref.close();
  }
  ngOnInit(): void {}
}
