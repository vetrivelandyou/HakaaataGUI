import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsComponent } from './products.component';
import { ProductCreateComponent } from './create/product-create.component';

const routes: Routes = [
  { path: '', component: ProductsComponent }, 
  { path: 'create', component: ProductCreateComponent },
  { path: ':id', component: ProductsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
