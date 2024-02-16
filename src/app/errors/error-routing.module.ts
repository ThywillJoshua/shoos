import { RouterModule } from '@angular/router';
import { ErrorComponent } from './error.compoent';
import { NgModule } from '@angular/core';

const routes = [
  {
    path: 'error',
    component: ErrorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ErrorRoutingModule {}
