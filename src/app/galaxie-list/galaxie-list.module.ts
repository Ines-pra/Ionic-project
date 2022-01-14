import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GalaxieListPageRoutingModule } from './galaxie-list-routing.module';

import { GalaxieListPage } from './galaxie-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GalaxieListPageRoutingModule
  ],
  declarations: [GalaxieListPage]
})
export class GalaxieListPageModule {}
