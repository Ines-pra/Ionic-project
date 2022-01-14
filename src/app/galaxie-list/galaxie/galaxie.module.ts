import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GalaxiePageRoutingModule } from './galaxie-routing.module';

import { GalaxiePage } from './galaxie.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GalaxiePageRoutingModule
  ],
  declarations: [GalaxiePage]
})
export class GalaxiePageModule {}
