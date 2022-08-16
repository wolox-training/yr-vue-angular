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
  booksSubscription!: Subscription;
  booksCount: number = 0;

  constructor(public shoppingService: ShoppingCartService) {}

  ngOnInit(): void {
    this.booksSubscription = this.shoppingService
      .getBooks()
      .subscribe((response: IBook[]) => {
        this.books = response;
        this.booksCount = response.length;
      });
  }

  ngOnDestroy() {
    this.booksSubscription.unsubscribe();
  }

  get hasBooks(): boolean {
    return this.books.length > 0 ? true : false;
  }

  showCart() {
    this.openCart = !this.openCart;
  }

  deleteBook(id: number) {
    this.shoppingService.removeBook(id);
  }
}
