import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],

})

export class CarouselComponent implements OnInit {
  slides = [
    {
     
      'image': "../assets/images/emi.jpg",
     
    },
   
    {
     
      'image': "../assets/images/home.png",
     
    },
    {
     
      'image': "../assets/images/mobiles.png",
     
    },
    {
     
      'image': "../assets/images/wfh.png",
     
    },
    {
     
      'image': "../assets/images/air2.png",
     
    },
    
    {
     
      'image': "../assets/images/air1.png",
     
    },
    {
     
      'image': "../assets/images/hp.png",
     
    },
    
    {
     
      'image': "../assets/images/ref.jpg",
     
    },
   
    

  ]

  constructor() {
  }

  ngOnInit() {
  }

}
    