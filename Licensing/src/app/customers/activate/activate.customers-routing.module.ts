import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActivateCustomersComponent } from './activate.customers.component';

const routes: Routes = [
  { path: '', component: ActivateCustomersComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActivateCustomersRoutingModule { }
