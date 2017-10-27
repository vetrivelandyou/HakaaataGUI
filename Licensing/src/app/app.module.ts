import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { appRoutes } from './app.routing';
import { AppComponent } from './app.component';

import { HeaderBarComponent } from './_component/header-bar/header-bar.component';
import { SidenavBarComponent } from './_component/sidenav-bar/sidenav-bar.component';
import { RightnavBarComponent } from './_component/rightnav-bar/rightnav-bar.component';
import { ProductsViewComponent } from './_component/products-view/products-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderBarComponent,
    SidenavBarComponent,
    RightnavBarComponent,
    ProductsViewComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
      //{ enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
