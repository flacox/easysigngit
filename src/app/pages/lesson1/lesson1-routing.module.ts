import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Lesson1Page } from './lesson1.page';

const routes: Routes = [
  {
    path: '',
    component: Lesson1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Lesson1PageRoutingModule {}
