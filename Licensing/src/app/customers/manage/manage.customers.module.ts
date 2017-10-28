import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageCustomersRoutingModule } from './manage.customers-routing.module';
import { ManageCustomersComponent } from './manage.customers.component';

@NgModule({
  imports: [
    CommonModule,
    ManageCustomersRoutingModule
  ],
  declarations: [ManageCustomersComponent]
})
export class ManageCustomersModule { }
