import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tab/tab.module').then(m => m.TabPageModule)
  }
  // {
  //   path: 'home',
  //   loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  // },
  // {
  //   path: '',
  //   redirectTo: 'home',
  //   pathMatch: 'full'
  // },
  // {
  //   path: 'galaxie-list',
  //   loadChildren: () => import('./galaxie-list/galaxie-list.module').then( m => m.GalaxieListPageModule)
  // },
  // {
  //   path: 'about',
  //   loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  // },
  // {
  //   path: 'tab',
  //   loadChildren: () => import('./tab/tab.module').then( m => m.TabPageModule)
  // },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
