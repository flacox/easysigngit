import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Quiz3PageRoutingModule } from './quiz3-routing.module';

import { Quiz3Page } from './quiz3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Quiz3PageRoutingModule
  ],
  declarations: [Quiz3Page]
})
export class Quiz3PageModule {}
