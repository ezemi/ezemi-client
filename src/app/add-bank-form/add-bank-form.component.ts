import { Component, OnInit } from '@angular/core';
import { Bank } from '../Models/bank';
import { AdminServiceService } from '../services/admin-service.service';

@Component({
  selector: 'app-add-bank-form',
  templateUrl: './add-bank-form.component.html',
  styleUrls: ['./add-bank-form.component.css']
})
export class AddBankFormComponent implements OnInit {

  bank:Bank = new Bank();

  constructor(private aservice : AdminServiceService) { }

  ngOnInit(): void {
  }

  submitBank(){
    console.log(this.bank);
    this.aservice.addBank(this.bank).subscribe(
      data=>{
        console.log(JSON.stringify(data));
      }
    );
  }

}
