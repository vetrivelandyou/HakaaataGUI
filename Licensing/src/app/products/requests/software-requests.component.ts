import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ProductService } from '../../_models/product.service';

import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-software-requests',
  templateUrl: './software-requests.component.html',
  styleUrls: ['./software-requests.component.css']
})
export class SoftwareRequestsComponent implements OnInit {
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
