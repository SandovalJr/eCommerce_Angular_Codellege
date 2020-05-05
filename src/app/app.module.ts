import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { CarrouselComponent } from './components/home/carrousel/carrousel.component';

// iconos

@NgModule({
  declarations: [AppComponent, NavbarComponent, HomeComponent, CarrouselComponent],
  // todo lo que tenga la palabra modulos 
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
