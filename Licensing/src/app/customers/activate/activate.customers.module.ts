import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivateCustomersRoutingModule } from './activate.customers-routing.module';
import { ActivateCustomersComponent } from './activate.customers.component';

@NgModule({
  imports: [
    CommonModule,
    ActivateCustomersRoutingModule
  ],
  declarations: [ActivateCustomersComponent]
})
export class ActivateCustomersModule { }
