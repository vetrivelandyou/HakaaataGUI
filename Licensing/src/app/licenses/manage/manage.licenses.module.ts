import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageLicensesRoutingModule } from './manage.licenses-routing.module';
import { ManageLicensesComponent } from './manage.licenses.component';

@NgModule({
  imports: [
    CommonModule,
    ManageLicensesRoutingModule
  ],
  declarations: [ManageLicensesComponent]
})
export class ManageLicensesModule { }
