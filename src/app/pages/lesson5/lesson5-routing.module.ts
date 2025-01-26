import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Lesson5Page } from './lesson5.page';

const routes: Routes = [
  {
    path: '',
    component: Lesson5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Lesson5PageRoutingModule {}
