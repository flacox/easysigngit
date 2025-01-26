import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeQuizPage } from './home-quiz.page';

const routes: Routes = [
  {
    path: '',
    component: HomeQuizPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeQuizPageRoutingModule {}
