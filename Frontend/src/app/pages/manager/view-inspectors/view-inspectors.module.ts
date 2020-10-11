import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ViewInspectorsPage } from './view-inspectors.page';

const routes: Routes = [
  {
    path: '',
    component: ViewInspectorsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ViewInspectorsPage]
})
export class ViewInspectorsPageModule {}
