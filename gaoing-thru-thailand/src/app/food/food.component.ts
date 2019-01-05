import { Component, OnInit } from '@angular/core';
import { Food } from '../food';
import { FOOD } from '../food-list';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {

  foods = FOOD;

  constructor() { }

  ngOnInit() {
  }

}
