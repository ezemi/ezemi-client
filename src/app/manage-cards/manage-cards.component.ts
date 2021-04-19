import { Component, OnInit } from '@angular/core';
import {MatDialog , MatDialogRef} from '@angular/material/dialog';
import { AddCardTypeFormComponent } from '../add-card-type-form/add-card-type-form.component';
import { CardType } from "../Models/card-type";
import { AdminServiceService } from '../services/admin-service.service';

@Component({
  selector: 'app-manage-cards',
  templateUrl: './manage-cards.component.html',
  styleUrls: ['./manage-cards.component.css']
})
export class ManageCardsComponent implements OnInit {

  cardType:CardType[];

  constructor(public dialog:MatDialog, private aservice: AdminServiceService) { }

  displayedColumns:String[]=['CardId' , 'CardName', 'CreditAmount' ,'deleteCategory'];
  
  
  ngOnInit(): void {
    this.aservice.getAllCardType().subscribe(
      data=>{
        console.log(JSON.stringify(data));
        this.cardType=data;
      }
    );

  }

  openAddCardTypeForm(){
    let dialogref = this.dialog.open(AddCardTypeFormComponent,  {height:'400px' , width:'500px'});

    dialogref.afterClosed().subscribe((result) => {
      this.ngOnInit();
    });
  }
}
