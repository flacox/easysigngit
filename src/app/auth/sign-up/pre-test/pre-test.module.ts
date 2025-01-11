import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PreTestPageRoutingModule } from './pre-test-routing.module';

import { PreTestPage } from './pre-test.page';
import { SharedModule } from '../../../modules/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PreTestPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [PreTestPage]
})
export class PreTestPageModule {}
