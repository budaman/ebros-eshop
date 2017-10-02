import { Injectable } from '@angular/core'
import { Products } from './products-type'
import { PRODUCTS } from './products'

@Injectable()

export class ProductService {
  getProducts(): Promise<Products[]> {
      return Promise.resolve(PRODUCTS)
  }
  getProductsSlowly(): Promise<Products[]> {
  return new Promise(resolve => {
    // Simulate server latency with 2 second delay
    setTimeout(() => resolve(this.getProducts()), 1000);
  });
}
}
