import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabPage } from './tab.page';

const routes: Routes = [
  {
    path: 'tab',
    component: TabPage,
    children : [
      {
        path: 'galaxies',
        loadChildren : () => import('../galaxie-list/galaxie-list.module').then( m => m.GalaxieListPageModule)
      },
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'about',
        loadChildren: () => import('../about/about.module').then( m => m.AboutPageModule)
      },
      {
        path: 'new',
        loadChildren: () => import('../galaxie-list/galaxie-new/galaxie-new.module').then( m => m.GalaxieNewPageModule)
      },
      {
        path: 'unegalaxie/:id',
        loadChildren: () => import('../galaxie-list/galaxie/galaxie.module').then( m => m.GalaxiePageModule)
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tab/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabPageRoutingModule {}
