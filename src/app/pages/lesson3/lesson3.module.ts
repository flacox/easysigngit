import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Lesson3PageRoutingModule } from './lesson3-routing.module';

import { Lesson3Page } from './lesson3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Lesson3PageRoutingModule
  ],
  declarations: [Lesson3Page]
})
export class Lesson3PageModule {}
