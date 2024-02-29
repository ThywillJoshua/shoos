import { NgModule } from '@angular/core';
import { SharedRoutingModule } from './shared-routing.module';
import { NavComponent } from './components/nav/nav.component';

@NgModule({
  declarations: [NavComponent],
  imports: [SharedRoutingModule],
  exports: [NavComponent],
})
export class SharedModule {}
