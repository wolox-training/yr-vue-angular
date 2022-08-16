import { Component, Input, OnInit } from '@angular/core';
import { IBook } from 'src/app/interfaces/global.interface';
import { ShoppingCartService } from '../../services/shopping-cart.service';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss'],
})
export class BookCardComponent {
  @Input() book!: IBook;

  constructor(private shoppingService: ShoppingCartService) {}

  addBook() {
    this.shoppingService.setBook(this.book);
  }
}
