import { Component, OnInit } from '@angular/core';
import { ProductsInterface } from 'src/app/interfaces/eCommerce.interfaces';
import { Products, Departments } from 'src/app/data/data';
import { from } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-fotografia',
  templateUrl: './fotografia.component.html',
  styleUrls: ['./fotografia.component.css'],
})
export class FotografiaComponent implements OnInit {
  public productsShowCamaras: Array<ProductsInterface> = [];

  constructor() {
    this.getCamaras();
  }

  ngOnInit(): void {}

  public getCamaras() {
    let departamento = Departments.find(
      (departamento) => departamento.department == 'Fotografía'
    );
    from(Products)
      .pipe(
        filter((producto) => producto.department == departamento.id),

        map((producto) => {
          let urlImage = `../../../../assets/DATA/${producto.img}`;
          console.log(urlImage);
          return {
            ...producto,
            img: urlImage,
          };
        }),
        tap((ProdutoActualizado) =>
          this.productsShowCamaras.push(ProdutoActualizado)
        )
      )
      .subscribe();
  }
}
