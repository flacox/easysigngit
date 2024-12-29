import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Lesson1PageRoutingModule } from './lesson1-routing.module';

import { Lesson1Page } from './lesson1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Lesson1PageRoutingModule
  ],
  declarations: [Lesson1Page]
})
export class Lesson1PageModule {}
