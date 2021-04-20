import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EmiCard } from '../Models/emi-card';
import { LoginStatus } from '../Models/login-status';
import { UserServiceService } from '../services/user-service.service';
@Component({
  selector: 'app-activatecard',
  templateUrl: './activatecard.component.html',
  styleUrls: ['./activatecard.component.css']
})
export class ActivatecardComponent implements OnInit {
  rowData:any;
  amount:string;
  loguser:LoginStatus;
  constructor(public dialogref: MatDialogRef<ActivatecardComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data:EmiCard,private uservice:UserServiceService)
     {
      console.log(data);
      this.rowData = { ...data };
      }

     close() {
        this.dialogref.close();
      }
  ngOnInit(): void {
    if(this.rowData.cardType.cardTypeId==1){
      this.amount="300";
    }
    else{
      this.amount="500";
    }
  }

  activateCard(){
    this.loguser= JSON.parse(localStorage.getItem("loggedinuser"));
       this.uservice.activateCard(this.loguser.userId).subscribe(
         data=>{
           console.log(JSON.stringify(data))
         }
       );
       this.close() 
       
  }

}
