import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { HeaderBarComponent } from './component/header-bar/header-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
