import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UsersByIdComponent } from './components/containers/users-by-id-page/users-by-id.component';
import { UsersComponent } from './components/containers/users-page/users.component';

const routes = [
  {
    path: 'users',
    component: UsersComponent,
  },
  {
    path: 'users/id',
    component: UsersByIdComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
