import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ErrorMessagePageRoutingModule } from './error-message-routing.module';

import { ErrorMessagePage } from './error-message.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ErrorMessagePageRoutingModule
  ],
  declarations: [ErrorMessagePage]
})
export class ErrorMessagePageModule {}
