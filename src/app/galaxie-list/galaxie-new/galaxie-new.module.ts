import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GalaxieNewPageRoutingModule } from './galaxie-new-routing.module';

import { GalaxieNewPage } from './galaxie-new.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GalaxieNewPageRoutingModule
  ],
  declarations: [GalaxieNewPage]
})
export class GalaxieNewPageModule {}
