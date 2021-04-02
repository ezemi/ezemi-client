import { Component, OnInit, Output, EventEmitter, SystemJsNgModuleLoader } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private router:Router ) { }


  isNew:boolean;

  ngOnInit(): void {
  }

  @Output()
  buttonPressed : EventEmitter<boolean> = new EventEmitter<boolean>();

  onpressed(){
    this.buttonPressed.emit(false);
  }

}
