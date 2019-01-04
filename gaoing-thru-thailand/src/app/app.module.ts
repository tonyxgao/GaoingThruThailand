import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { FoodComponent } from './food/food.component';
import { PlacesComponent } from './places/places.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    FoodComponent,
    PlacesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
