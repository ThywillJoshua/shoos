import { NgModule } from '@angular/core';
import { usersByIdComponent } from './components/containers/users-by-id-page/users-by-id.component';
import { usersComponent } from './components/containers/users-page/users.component';
import { usersRoutingModule } from './users-routing.module';

@NgModule({
  declarations: [usersByIdComponent, usersComponent],
  imports: [usersRoutingModule],
  exports: [],
})
export class ShoeModule {}
