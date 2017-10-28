import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComplianceLicensesRoutingModule } from './compliance.licenses-routing.module';
import { ComplianceLicensesComponent } from './compliance.licenses.component';

@NgModule({
  imports: [
    CommonModule,
    ComplianceLicensesRoutingModule
  ],
  declarations: [ComplianceLicensesComponent]
})
export class ComplianceLicensesModule { }
