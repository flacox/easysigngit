import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Lesson3Page } from './lesson3.page';

const routes: Routes = [
  {
    path: '',
    component: Lesson3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Lesson3PageRoutingModule {}
