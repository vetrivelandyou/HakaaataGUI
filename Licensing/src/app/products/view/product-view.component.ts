import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../_models/product.service';
@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {
 public products: any;
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.products = this.productService.getProducts();
    console.log(this.products);
  }

}
