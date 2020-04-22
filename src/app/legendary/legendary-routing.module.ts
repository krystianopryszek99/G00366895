import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LegendaryPage } from './legendary.page';

const routes: Routes = [
  {
    path: '',
    component: LegendaryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LegendaryPageRoutingModule {}
