import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SmartPhonesComponent } from './components/products/smart-phones/smart-phones.component';
import { NotFoundComponent } from './components/shared/not-found/not-found.component';
import { LineaBlancaComponent } from './components/products/linea-blanca/linea-blanca.component';
import { FotografiaComponent } from './components/products/fotografia/fotografia.component';
import { VistUsComponent } from './components/home/vist-us/vist-us.component';
import { CostumerCareComponent } from './components/home/costumer-care/costumer-care.component';
import { BuyProductsComponent } from './components/products/buy-products/buy-products.component';

const rutas: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'smartphones',
    component: SmartPhonesComponent,
  },
  {
    path: 'linea_blanca',
    component: LineaBlancaComponent,
  },
  {
    path: 'fotografia',
    component: FotografiaComponent,
  },
  {
    path: 'visitUs',
    component: VistUsComponent,
  },
  {
    path: 'costumerCare',
    component: CostumerCareComponent,
  },
  {
    path: 'buyProducts/:id',
    component: BuyProductsComponent,
  },

  //   SIEMPRE RUTA DEFAULT
  { path: 'notFound', component: NotFoundComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'notFound' },
];

// Enviamos el array de rutes
export const APP_ROUTES = RouterModule.forRoot(rutas);
