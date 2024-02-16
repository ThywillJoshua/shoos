import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { usersByIdComponent } from './components/containers/users-by-id-page/users-by-id.component';
import { usersComponent } from './components/containers/users-page/users.component';

const routes = [
  {
    path: 'users',
    component: usersComponent,
  },
  {
    path: 'users/id',
    component: usersByIdComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class usersRoutingModule {}
