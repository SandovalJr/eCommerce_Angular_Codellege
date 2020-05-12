import { Component, OnInit } from '@angular/core';
import { ProductsInterface } from 'src/app/interfaces/eCommerce.interfaces';
import { Products, Departments } from 'src/app/data/data';
import { from } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-smart-phones',
  templateUrl: './smart-phones.component.html',
  styleUrls: ['./smart-phones.component.css'],
})
export class SmartPhonesComponent implements OnInit {
  public productsShow: Array<ProductsInterface> = [];

  constructor(private router: Router) {
    this.GetProducts();
  }

  ngOnInit(): void {}

  public GetProducts() {
    let Departamente = Departments.find(
      (value) => (value.department = 'SmartPhones')
    );

    from(Products)
      .pipe(
        filter((producto) => producto.department == Departamente.id),

        map((producto) => {
          let urlImage = `../../../../assets/DATA/${producto.img}`;
          console.log(urlImage);
          return {
            ...producto,
            img: urlImage,
          };
        }),
        tap((ProdutoActualizado) => this.productsShow.push(ProdutoActualizado))
      )
      .subscribe();
  }

  public GetIdToChangeScreen(id: number) {
    // console.log(id);
    this.router.navigate(['buyProducts', id]);
  }
}
