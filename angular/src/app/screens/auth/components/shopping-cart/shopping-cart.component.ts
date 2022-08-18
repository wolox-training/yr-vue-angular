import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IBook } from 'src/app/interfaces/global.interface';
import { ShoppingCartService } from '../../../../services/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
})
export class ShoppingCartComponent implements OnInit, OnDestroy {
  openCart: boolean = false;
  books: IBook[] = [];
  shoppingSubscription!: Subscription;
  booksCount: number = 0;

  constructor(public shoppingService: ShoppingCartService) {}

  ngOnInit(): void {
    this.shoppingSubscription = this.shoppingService
      .getBooks()
      .subscribe((response: IBook) => {
        this.books.push(response);
        this.booksCount = this.books.length;
      });
  }

  ngOnDestroy() {
    this.shoppingSubscription.unsubscribe();
  }

  get hasBooks(): boolean {
    return this.booksCount > 0;
  }

  showCart() {
    this.openCart = !this.openCart;
  }

  deleteBook(id: number) {
    this.shoppingService.removeBook(id);
  }
}
