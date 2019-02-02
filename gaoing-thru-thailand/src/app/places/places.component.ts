import { Component, OnInit } from '@angular/core';
import { Place } from '../place';
import { PLACES } from '../places-list';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.scss']
})
export class PlacesComponent implements OnInit {

  places = PLACES;

  constructor() { }

  ngOnInit() {
  }

}
