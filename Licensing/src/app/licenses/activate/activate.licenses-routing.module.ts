import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActivateLicensesComponent } from './activate.licenses.component';

const routes: Routes = [
  { path: '', component: ActivateLicensesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActivateLicensesRoutingModule { }
