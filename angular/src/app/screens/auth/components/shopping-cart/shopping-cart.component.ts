import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
})
export class ShoppingCartComponent {
  emptyCart = false;
  showCart = false;
  openCart() {}
  isShowCart() {
    return this.showCart ? 'removePopup ' : 'showPopup';
  }
}
