import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Lesson4Page } from './lesson4.page';

const routes: Routes = [
  {
    path: '',
    component: Lesson4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Lesson4PageRoutingModule {}
