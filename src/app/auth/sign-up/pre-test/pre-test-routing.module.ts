import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PreTestPage } from './pre-test.page';

const routes: Routes = [
  {
    path: '',
    component: PreTestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PreTestPageRoutingModule {}
