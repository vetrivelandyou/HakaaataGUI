import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManageLicensesComponent } from './manage.licenses.component';

const routes: Routes = [
  { path: '', component: ManageLicensesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageLicensesRoutingModule { }
