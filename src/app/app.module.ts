import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoeModule } from './shoes/shoes.module';
import { usersByIdComponent } from './users/components/containers/users-by-id-page/users-by-id.component';
import { usersComponent } from './users/components/containers/users-page/users.component';
@NgModule({
  declarations: [AppComponent, usersByIdComponent, usersComponent],
  imports: [BrowserModule, AppRoutingModule, ShoeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
