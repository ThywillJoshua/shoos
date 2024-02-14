import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoesListPageComponent } from './products/containers/shoes-list-page/shoes-list-page.component';
import { ShoePageComponent } from './products/containers/shoe-page/shoe-page.component';
import { YellowBoxComponent } from './products/components/yellow-box/yellow-box.component';
import { CartPageComponent } from './products/containers/cart-page/cart-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoesListPageComponent,
    ShoePageComponent,
    CartPageComponent,
    YellowBoxComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
