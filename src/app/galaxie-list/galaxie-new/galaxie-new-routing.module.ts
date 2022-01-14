import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GalaxieNewPage } from './galaxie-new.page';

const routes: Routes = [
  {
    path: '',
    component: GalaxieNewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GalaxieNewPageRoutingModule {}
