import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RenewListLicensesComponent } from './renew-list.licenses.component';

const routes: Routes = [
  { path: '', component: RenewListLicensesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RenewListLicensesRoutingModule { }
