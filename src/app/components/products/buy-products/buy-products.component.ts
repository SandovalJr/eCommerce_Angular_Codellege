import { Component, OnInit } from '@angular/core';
import { ProductsInterface } from '../../../interfaces/eCommerce.interfaces';
import { from, Observable } from 'rxjs';
import { Products } from 'src/app/data/data';
import { filter, map, pluck, switchMap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buy-products',
  templateUrl: './buy-products.component.html',
  styleUrls: ['./buy-products.component.css'],
})
export class BuyProductsComponent implements OnInit {
  public mostrar = false;
  public product: ProductsInterface;

  constructor(private AR: ActivatedRoute) {
    window.scrollTo(0, 0);
    this.AR.params
      .pipe(
        pluck('id'),
        switchMap((id) => this.GetProduct(id))
      )
      .subscribe((valor) => (this.product = valor));
  }

  ngOnInit(): void {}

  public GetProduct(id: number) {
    return from(Products).pipe(
      filter((producto) => producto.id == id),
      map((producto) => ({
        ...producto,
        img: `../../../../assets/DATA/${producto.img}`,
      }))
    );
  }
}
