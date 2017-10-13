import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { appRoutes } from './app.routing';
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
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
