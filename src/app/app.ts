import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.html'
})
export class App {

  addition: number;
  subtraction: number;
  multiplication: number;
  division: number;

  constructor(private dataService: DataService) {

    this.addition = this.dataService.add(20, 10);

    this.subtraction = this.dataService.subtract(20, 10);

    this.multiplication = this.dataService.multiply(20, 10);

    this.division = this.dataService.divide(20, 10);
  }
}