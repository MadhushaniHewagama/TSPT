import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { InspectorDashboardPage } from './inspector-dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: InspectorDashboardPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [InspectorDashboardPage]
})
export class InspectorDashboardPageModule {}
