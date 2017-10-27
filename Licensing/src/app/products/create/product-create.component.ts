import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ProductService } from '../../_models/product.service';

import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  public products: any;
  constructor(private productService: ProductService, public toastr: ToastsManager, vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
    this.products = this.productService.getProducts();
    console.log(this.products);
  }

  saveProduct() {
    console.info("Submit");
    //this.toastr.success('Licence Saved :) !', 'Success!');
    this.toastr.success('This toast will dismiss in 10 seconds.', null, {toastLife: 10000});
  }

}
