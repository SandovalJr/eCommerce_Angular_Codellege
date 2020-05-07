import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/data/data';
import { take, mapTo, pluck, map, tap, filter } from 'rxjs/operators';
import { from } from 'rxjs';

@Component({
  selector: 'app-banner-promocion-productos',
  templateUrl: './banner-promocion-productos.component.html',
  styleUrls: ['./banner-promocion-productos.component.css'],
})
export class BannerPromocionProductosComponent implements OnInit {
  public FotosArray: Array<string> = [];
  constructor() {
    this.GetImage();
  }

  ngOnInit(): void {}

  public GetImage() {
    for (let index = 0; index < 2; index++) {
      const element = Math.floor(Math.random() * (Products.length - 1) + 1);
      const temporal = Products[element];
      console.log(temporal.img);
      
      this.FotosArray.push(`../../../../assets/DATA/${temporal.img}`);
    }
  }
}
