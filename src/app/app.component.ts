import { Component, OnInit } from '@angular/core';
import { BikesDetailsComponent } from './bikes-details/bikes-details.component';
import { BikesComponent } from './bikes/bikes.component';

@Component({
  standalone:true,
  selector: 'app-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports:[BikesComponent,BikesDetailsComponent]
})
export class AppComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}