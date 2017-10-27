import { Injectable } from '@angular/core';

import { Products } from './products';

@Injectable()
export class ProductService {
  getProducts(): any  {
    return Products;
  }
}
