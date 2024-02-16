import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoeModule } from './shoes/shoes.module';
import { UserModule } from './users/users.module';
import { ErrorModule } from './errors/error.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShoeModule,
    UserModule,
    ErrorModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
