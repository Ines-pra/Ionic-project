import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GalaxieListPage } from './galaxie-list.page';

const routes: Routes = [
  {
    path: '',
    component: GalaxieListPage
  },
  {
    path: 'new',
    loadChildren: () => import('./galaxie-new/galaxie-new.module').then( m => m.GalaxieNewPageModule)
  },
  {
    path: ':id',
    loadChildren: () => import('./galaxie/galaxie.module').then( m => m.GalaxiePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GalaxieListPageRoutingModule {}
