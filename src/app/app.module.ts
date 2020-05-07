import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { CarrouselComponent } from './components/home/carrousel/carrousel.component';
import { NewArrivalsComponent } from './components/home/new-arrivals/new-arrivals.component';
import { GetOnListComponent } from './components/home/get-on-list/get-on-list.component';
import { BannerPromocionProductosComponent } from './components/home/banner-promocion-productos/banner-promocion-productos.component';
import { FooterComponent } from './components/home/shared/footer/footer.component';
import { BlackFooterComponent } from './components/home/shared/black-footer/black-footer.component';
import { SmartPhonesComponent } from './components/products/smart-phones/smart-phones.component';
import { FotografiaComponent } from './components/products/fotografia/fotografia.component';
import { LineaBlancaComponent } from './components/products/linea-blanca/linea-blanca.component';
import { AllProductsComponent } from './components/products/all-products/all-products.component';

// iconos

@NgModule({
  declarations: [AppComponent, NavbarComponent, HomeComponent, CarrouselComponent, NewArrivalsComponent, GetOnListComponent, BannerPromocionProductosComponent, FooterComponent, BlackFooterComponent, SmartPhonesComponent, FotografiaComponent, LineaBlancaComponent, AllProductsComponent],
  // todo lo que tenga la palabra modulos 
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
