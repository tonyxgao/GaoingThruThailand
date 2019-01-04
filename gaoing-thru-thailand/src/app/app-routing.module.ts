import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { FoodComponent } from './food/food.component';
import { PlacesComponent } from './places/places.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'food', component: FoodComponent},
  { path: 'places', component: PlacesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
