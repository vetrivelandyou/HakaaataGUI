import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LicensesRoutingModule } from './licenses-routing.module';
import { LicensesComponent } from './licenses.component';

@NgModule({
  imports: [
    CommonModule,
    LicensesRoutingModule
  ],
  declarations: [LicensesComponent]
})
export class LicensesModule { }
