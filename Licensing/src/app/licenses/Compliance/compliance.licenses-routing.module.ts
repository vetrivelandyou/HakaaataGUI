import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComplianceLicensesComponent } from './compliance.licenses.component';

const routes: Routes = [
  { path: '', component: ComplianceLicensesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComplianceLicensesRoutingModule { }
