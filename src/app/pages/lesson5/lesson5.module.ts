import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Lesson5PageRoutingModule } from './lesson5-routing.module';

import { Lesson5Page } from './lesson5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Lesson5PageRoutingModule
  ],
  declarations: [Lesson5Page]
})
export class Lesson5PageModule {}
