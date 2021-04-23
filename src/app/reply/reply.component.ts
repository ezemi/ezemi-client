import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ContactUs } from '../Models/contact-us';
import { Status } from '../Models/status';
import { AdminServiceService } from '../services/admin-service.service';

@Component({
  selector: 'app-reply',
  templateUrl: './reply.component.html',
  styleUrls: ['./reply.component.css']
})
export class ReplyComponent implements OnInit {

  rowData: any;
  genreply:string="Thanks for contacting us visit our wiki for more."
  status:Status;
  sreply:ContactUs=new ContactUs();
  constructor( public dialogref: MatDialogRef<ReplyComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: ContactUs,
     private aservice:AdminServiceService) { 
      console.log(data);
    this.rowData = { ...data };
    }

    close() {
      this.dialogref.close();
    }
  ngOnInit(): void {
  }

  sendreply(){
    this.sreply.queryId=this.rowData.queryId;
    this.sreply.email=this.rowData.email;
    this.sreply.query=this.genreply;
    console.log(this.sreply)

    this.aservice.sendReply(this.sreply).subscribe(
      data=>{
          this.status=data;
          console.log(JSON.stringify(data));
          console.log(JSON.stringify(this.status));

          if(this.status!=null){
            this.close();
          }
      }
    );
    
   

    
  }
  
}

