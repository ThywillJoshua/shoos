import { NgModule } from '@angular/core';
import { ShoesListPageComponent } from './containers/shoes-list-page/shoes-list-page.component';
import { ShoePageComponent } from './containers/shoe-page/shoe-page.component';
import { CartPageComponent } from './containers/cart-page/cart-page.component';
import { YellowBoxComponent } from './components/yellow-box/yellow-box.component';
import { ShoesRoutingModule } from './shoes-routing.module';

@NgModule({
  declarations: [
    ShoesListPageComponent,
    ShoePageComponent,
    CartPageComponent,
    YellowBoxComponent,
  ],
  imports: [ShoesRoutingModule],
  exports: [],
})
export class ShoeModule {}
