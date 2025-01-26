import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Lesson4PageRoutingModule } from './lesson4-routing.module';

import { Lesson4Page } from './lesson4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Lesson4PageRoutingModule
  ],
  declarations: [Lesson4Page]
})
export class Lesson4PageModule {}
