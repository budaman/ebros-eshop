import { Component, OnInit } from '@angular/core';
import { Cart } from './api/cart';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {

  cart: any[]
  subscription: Subscription

  constructor(private _mainComponent: Cart) {}

  ngOnInit() {
    this.subscription = this._mainComponent.cartItem$
    .subscribe(item => this.cart = item)
  }

  ngOnDestroy(){
    this.subscription.unsubscribe()
  }


}
