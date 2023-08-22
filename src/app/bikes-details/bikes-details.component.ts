import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  standalone:true,
  selector: 'app-bikes-details',
  templateUrl: './bikes-details.component.html',
  styleUrls: ['./bikes-details.component.css'],
  imports:[CommonModule,FormsModule]

})
export class BikesDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}