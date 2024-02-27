import { NgModule } from '@angular/core';
import { SharedRoutingModule } from './shared-routing.module';
import { NotFoundPageComponent } from './containers/not-found-page/not-found-page.component';
import { HomePageComponent } from './containers/home-page/home-page.component';

@NgModule({
  declarations: [HomePageComponent, NotFoundPageComponent],
  imports: [SharedRoutingModule],
  exports: [],
})
export class SharedModule {}
