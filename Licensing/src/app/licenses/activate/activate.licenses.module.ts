import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivateLicensesRoutingModule } from './activate.licenses-routing.module';
import { ActivateLicensesComponent } from './activate.licenses.component';

@NgModule({
  imports: [
    CommonModule,
    ActivateLicensesRoutingModule
  ],
  declarations: [ActivateLicensesComponent]
})
export class ActivateLicensesModule { }
