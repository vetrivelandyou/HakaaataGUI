import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { HeaderBarComponent } from './component/header-bar/header-bar.component';
import { SidenavBarComponent } from './component/sidenav-bar/sidenav-bar.component';
import { RightnavBarComponent } from './component/rightnav-bar/rightnav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderBarComponent,
    SidenavBarComponent,
    RightnavBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
