import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ManagerDashboardPage } from './manager-dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: ManagerDashboardPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ManagerDashboardPage]
})
export class ManagerDashboardPageModule {}
