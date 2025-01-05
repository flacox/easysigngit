import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'folder/Inbox',
  //   pathMatch: 'full'
  // },
  // {
  //   path: 'folder/:id',
  //   loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  // },
  // {
  //   path: 'lesson',
  //   loadChildren: () => import('./modules/lesson/lesson.module').then( m => m.LessonPageModule)
  // }
  {
    path: '',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthPageModule)
  },
  {
    path: 'lesson',
    loadChildren: () => import('./modules/lesson/lesson.module').then(m => m.LessonPageModule)
  },
  {
    path: 'lesson1',
    loadChildren: () => import('./pages/lesson1/lesson1.module').then( m => m.Lesson1PageModule)
  },
  {
    path: 'lesson2',
    loadChildren: () => import('./pages/lesson2/lesson2.module').then( m => m.Lesson2PageModule)
  },
  {
    path: 'lesson3',
    loadChildren: () => import('./pages/lesson3/lesson3.module').then( m => m.Lesson3PageModule)
  },
  {
    path: 'test',
    loadChildren: () => import('./modules/test/test.module').then( m => m.TestPageModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
