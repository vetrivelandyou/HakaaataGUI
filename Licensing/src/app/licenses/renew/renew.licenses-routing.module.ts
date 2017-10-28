import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RenewLicensesComponent } from './renew.licenses.component';

const routes: Routes = [
  { path: '', component: RenewLicensesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RenewLicensesRoutingModule { }
