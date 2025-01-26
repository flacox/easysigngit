import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Quiz3Page } from './quiz3.page';

const routes: Routes = [
  {
    path: '',
    component: Quiz3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Quiz3PageRoutingModule {}
