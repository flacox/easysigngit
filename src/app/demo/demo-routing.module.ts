import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DemoPage } from './demo.page';

const routes: Routes = [
  {
    path: '',
    component: DemoPage
  },
  {
    path: 'test1',
    loadChildren: () => import('./test1/test1.module').then( m => m.Test1PageModule)
  },
  {
    path: 'test2',
    loadChildren: () => import('./test2/test2.module').then( m => m.Test2PageModule)
  },
  {
    path: 'test3',
    loadChildren: () => import('./test3/test3.module').then( m => m.Test3PageModule)
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DemoPageRoutingModule {}
