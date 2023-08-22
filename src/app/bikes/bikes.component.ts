import { Component, OnInit } from '@angular/core';
import { AppFullDetails } from '../app-full-details';
import { BIKES } from '../app-half-details';
import { BikeComponent } from './bike/bike.component';

@Component({
  standalone:true,
  selector: 'app-bikes',
  templateUrl: './bikes.component.html',
  styleUrls: ['./bikes.component.css'],
  imports:[BikeComponent]
})
export class BikesComponent implements OnInit {
  bikes: AppFullDetails[]=[];

  constructor() { }

  ngOnInit() {
    this.bikes=BIKES;
  }

}