import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RenewListLicensesRoutingModule } from './renew-list.licenses-routing.module';
import { RenewListLicensesComponent } from './renew-list.licenses.component';

@NgModule({
  imports: [
    CommonModule,
    RenewListLicensesRoutingModule
  ],
  declarations: [RenewListLicensesComponent]
})
export class RenewListLicensesModule { }
