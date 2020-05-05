import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  public tituloEmpresa: string = 'VESTE';

  public NavbarTitulo: Array<string> = [
    'HOME',
    'COLLECTION',
    'LOOKBOOK',
    'CUSTOMER CARE',
    'VIST US',
  ];

  constructor() {}

  ngOnInit(): void {}
}
