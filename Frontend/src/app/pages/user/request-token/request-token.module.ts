import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RequestTokenPage } from './request-token.page';
import {NgxQRCodeModule} from 'ngx-qrcode2';
const routes: Routes = [
  {
    path: '',
    component: RequestTokenPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    NgxQRCodeModule
  ],
  declarations: [RequestTokenPage]
})
export class RequestTokenPageModule {}
