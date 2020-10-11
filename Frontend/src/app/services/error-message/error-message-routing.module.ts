import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ErrorMessagePage } from './error-message.page';

const routes: Routes = [
  {
    path: '',
    component: ErrorMessagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ErrorMessagePageRoutingModule {}
