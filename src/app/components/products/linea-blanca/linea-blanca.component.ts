import { Component, OnInit } from '@angular/core';
import { ProductsInterface } from 'src/app/interfaces/eCommerce.interfaces';
import { Products, Departments } from 'src/app/data/data';
import { from } from 'rxjs';
import { filter, map, tap, find } from 'rxjs/operators';

@Component({
  selector: 'app-linea-blanca',
  templateUrl: './linea-blanca.component.html',
  styleUrls: ['./linea-blanca.component.css'],
})
export class LineaBlancaComponent implements OnInit {
  public productsShowLN: Array<ProductsInterface> = [];

  constructor() {
    this.GetLB();
  }

  ngOnInit(): void {}

  public GetLB() {
    let departamento = Departments.find(
      (depa) => depa.department == 'Línea Blanca'
    );

    from(Products)
      .pipe(
        filter((producto) => producto.department === departamento.id),
        map((producto) => {
          let UrlImg = `../../../../assets/DATA/${producto.img}`;
          console.log(UrlImg);
          return {
            ...producto,
            img: UrlImg,
          };
        }),
        tap((ProdutoActualizado) =>
          this.productsShowLN.push(ProdutoActualizado)
        )
      )
      .subscribe();
  }
}
