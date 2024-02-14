import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoesListPageComponent } from './products/containers/shoes-list-page/shoes-list-page.component';
import { ShoePageComponent } from './products/containers/shoe-page/shoe-page.component';
import { CartPageComponent } from './products/containers/cart-page/cart-page.component';

const routes: Routes = [
  {
    path: 'shoes',
    component: ShoesListPageComponent,
  },
  {
    path: 'shoes/id',
    component: ShoePageComponent,
  },
  {
    path: 'shoes/cart',
    component: CartPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
