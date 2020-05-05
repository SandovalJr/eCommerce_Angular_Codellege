import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  public NavbarTitulo: Array<string> = [
    'WALTMART',
    'PRODUCTOS',
    'CUSTOMER CARE',
    'VIST US',
  ];

  constructor() {}

  ngOnInit(): void {}
}
