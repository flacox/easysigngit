import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeQuizPageRoutingModule } from './home-quiz-routing.module';

import { HomeQuizPage } from './home-quiz.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeQuizPageRoutingModule
  ],
  declarations: [HomeQuizPage]
})
export class HomeQuizPageModule {}
