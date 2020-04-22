import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SouthernPageRoutingModule } from './southern-routing.module';

import { SouthernPage } from './southern.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SouthernPageRoutingModule
  ],
  declarations: [SouthernPage]
})
export class SouthernPageModule {}
