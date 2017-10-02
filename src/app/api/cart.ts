import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs/BehaviorSubject'

@Injectable()
export class Cart {
  private _cartItemsSource = new BehaviorSubject<any>(null)
  cartItem$ = this._cartItemsSource.asObservable()

  changeCart(number) {
    this._cartItemsSource.next(number)
  }
}
