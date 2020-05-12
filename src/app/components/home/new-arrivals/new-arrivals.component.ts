import { Component, OnInit, ViewChild } from '@angular/core';
import { fromEvent, from } from 'rxjs';
import { ProductsInterface } from 'src/app/interfaces/eCommerce.interfaces';
import { Products } from './../../../data/data';
import { take, tap, map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-arrivals',
  templateUrl: './new-arrivals.component.html',
  styleUrls: ['./new-arrivals.component.css'],
})
export class NewArrivalsComponent implements OnInit {
  public mostrar: boolean = false;
  // vamos a traer el array de productos de la data
  public ArrivalProducts: Array<ProductsInterface> = [];

  constructor(private router: Router) {
    this.obtenerNewArrival();
  }

  ngOnInit(): void {}

  public MostrarDiv() {
    this.mostrar = true;
    // this.mostrar = !this.mostrar
  }
  public QuitarDiv() {
    this.mostrar = false;
  }

  obtenerNewArrival() {
    from(Products)
      .pipe(
        map((producto) => {
          let DireccionImg = `../../../../assets/DATA/${producto.img}`;
          return {
            ...producto,
            img: DireccionImg,
          };
        }),
        take(3),
        tap((value) => this.ArrivalProducts.push(value))
      )
      .subscribe((value) => console.log(this.ArrivalProducts));
  }

  GetIdToChangeScreen(id: number) {
    console.log(`EL ID DEL PRODUCTO ES ${id}`);
    // navigate construye una URL
    this.router.navigate(['buyProducts', id]);  
  }
}
