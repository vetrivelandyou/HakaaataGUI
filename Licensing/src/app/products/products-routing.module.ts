import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsComponent } from './products.component';
import { ProductCreateComponent } from './create/product-create.component';
import { SoftwareRequestsComponent } from './requests/software-requests.component';

import { ProductViewComponent } from './view/product-view.component';

const routes: Routes = [
  { path: '', component: ProductsComponent },  
  { path: 'requests', component: SoftwareRequestsComponent },
  { path: 'create', component: ProductCreateComponent },
  { path: ':id', component: ProductViewComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
