import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomersComponent } from './customers.component';

const routes: Routes = [
  { path: 'manage', loadChildren:  './manage/manage.customers.module#ManageCustomersModule' }, 
  { path: 'activate-licence', loadChildren:  './activate/activate.customers.module#ActivateCustomersModule' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
