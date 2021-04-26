import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContactUs } from '../Models/contact-us';
import { ReplyComponent } from '../reply/reply.component';

import { AdminServiceService } from '../services/admin-service.service';

@Component({
  selector: 'app-reply-queries',
  templateUrl: './reply-queries.component.html',
  styleUrls: ['./reply-queries.component.css'],
})
export class ReplyQueriesComponent implements OnInit {
  queries: ContactUs[] = [];
  constructor(
    public dialog: MatDialog,
    private aservice: AdminServiceService
  ) {}

  ngOnInit(): void {
    this.aservice.getQueries().subscribe((data) => {
      console.log(JSON.stringify(data));
      this.queries = data;
    });
  }

  openReply(obj) {
    let dialogref = this.dialog.open(ReplyComponent, {
      height: 'auto',
      width: '550px',
      data: obj,
    });

    dialogref.afterClosed().subscribe((result) => {
      setTimeout(function () {
        document.location.reload();
      }, 0);
    });
  }
}
