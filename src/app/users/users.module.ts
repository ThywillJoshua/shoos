import { NgModule } from '@angular/core';
import { UsersByIdComponent } from './components/containers/users-by-id-page/users-by-id.component';
import { UsersComponent } from './components/containers/users-page/users.component';
import { UsersRoutingModule } from './users-routing.module';

@NgModule({
  declarations: [UsersByIdComponent, UsersComponent],
  imports: [UsersRoutingModule],
  exports: [],
})
export class UserModule {}
