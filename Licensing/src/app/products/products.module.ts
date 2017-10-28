import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ProductViewComponent } from './view/product-view.component';
import { ProductCreateComponent } from './create/product-create.component';
import { SoftwareRequestsComponent } from './requests/software-requests.component';

import { ProductService } from '../_models/product.service';

@NgModule({
  imports: [
    CommonModule,
    ProductsRoutingModule
  ],
  providers: [ProductService],
  declarations: [ProductsComponent, ProductCreateComponent, ProductViewComponent, SoftwareRequestsComponent]
})

export class ProductsModule { }
