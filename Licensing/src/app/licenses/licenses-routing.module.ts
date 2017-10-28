import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LicensesComponent } from './licenses.component';

const routes: Routes = [
  { path: 'manage', loadChildren:  './manage/manage.licenses.module#ManageLicensesModule' }, 
  { path: 'activate-license', loadChildren:  './activate/activate.licenses.module#ActivateLicensesModule' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LicensesRoutingModule { }
