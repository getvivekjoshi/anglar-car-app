import { Component, OnInit } from '@angular/core';
import { CarService } from '../services/car.service';
import { Car } from '../models/car';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  cars: Car[];
  total:0;
  oldest: Car = null;
  mostUsed: Car = null;

  constructor(private carService: CarService){ }

  ngOnInit() {
  }

}
