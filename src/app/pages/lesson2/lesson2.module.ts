import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Lesson2PageRoutingModule } from './lesson2-routing.module';

import { Lesson2Page } from './lesson2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Lesson2PageRoutingModule
  ],
  declarations: [Lesson2Page]
})
export class Lesson2PageModule {}
