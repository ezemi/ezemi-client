import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ContactUs } from '../Models/contact-us';
import { AdminServiceService } from '../services/admin-service.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent implements OnInit {

  constructor(private router: Router, private aservice : AdminServiceService) {}

  isNew: boolean;
  query:ContactUs = new ContactUs();
  message:String;
  goldcredit:number=100000;
  platcredit:number=200000;

  ngOnInit(): void {}

  @Output()
  buttonPressed: EventEmitter<boolean> = new EventEmitter<boolean>();

  ezemistore() {
    this.router.navigate(['/page-content']);
  }

  submitQuery(){
    
    this.aservice.addCustomerQuery(this.query).subscribe((data) => {
      console.log(JSON.stringify(data));
      this.message = data.message;
    });
    setTimeout(function () {
      document.location.reload();
    }, 1000);
     
  }
}
