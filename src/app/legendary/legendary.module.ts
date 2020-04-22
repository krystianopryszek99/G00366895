import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LegendaryPageRoutingModule } from './legendary-routing.module';

import { LegendaryPage } from './legendary.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LegendaryPageRoutingModule
  ],
  declarations: [LegendaryPage]
})
export class LegendaryPageModule {}
