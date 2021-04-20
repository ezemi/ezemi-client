import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css'],
})
export class ProductdetailsComponent implements OnInit {
  name: String = 'Acer Predator Helios 300';
  img: String = '../assets/images/pred23.png ';

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    const id = +this.activatedRoute.snapshot.params['productId'];
  }
}
