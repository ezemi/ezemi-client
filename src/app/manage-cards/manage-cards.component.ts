import { Component, OnInit } from '@angular/core';
import {MatDialog , MatDialogRef} from '@angular/material/dialog';
import { AddCardTypeFormComponent } from '../add-card-type-form/add-card-type-form.component';
import { CardType } from "../Models/card-type";

@Component({
  selector: 'app-manage-cards',
  templateUrl: './manage-cards.component.html',
  styleUrls: ['./manage-cards.component.css']
})
export class ManageCardsComponent implements OnInit {

  ct:CardType[]=[
    {
      cardTypeId:100, cardTypeName:'GOLD' , creditAmout:50000
    },
    {
      cardTypeId:100, cardTypeName:'PLATINUM' , creditAmout:100000
    },
  ];
  constructor(public dialog:MatDialog) { }

  displayedColumns:String[]=['CardId' , 'CardName', 'CreditAmount' ,'deleteCategory'];
  dataSource = this.ct ; 
  ngOnInit(): void {
  }

  openAddCardTypeForm(){
    this.dialog.open(AddCardTypeFormComponent,  {height:'400px' , width:'500px'});
  }
}
