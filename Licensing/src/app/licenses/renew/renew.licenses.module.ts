import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RenewLicensesRoutingModule } from './renew.licenses-routing.module';
import { RenewLicensesComponent } from './renew.licenses.component';

@NgModule({
  imports: [
    CommonModule,
    RenewLicensesRoutingModule
  ],
  declarations: [RenewLicensesComponent]
})
export class RenewLicensesModule { }
