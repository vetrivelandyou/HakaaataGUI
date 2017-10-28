import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LicensesComponent } from './licenses.component';

const routes: Routes = [
  { path: 'manage', loadChildren:  './manage/manage.licenses.module#ManageLicensesModule' }, 
  { path: 'renew-list-license', loadChildren:  './renew-list/renew-list.licenses.module#RenewListLicensesModule' },
  { path: 'renew-license', loadChildren:  './renew/renew.licenses.module#RenewLicensesModule' },
  { path: 'compliance', loadChildren:  './compliance/compliance.licenses.module#ComplianceLicensesModule' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LicensesRoutingModule { }
