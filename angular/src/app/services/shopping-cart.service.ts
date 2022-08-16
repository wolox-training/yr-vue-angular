import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IBook } from '../interfaces/global.interface';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  public booksSubject = new Subject<IBook[]>();
  books: IBook[] = [];

  setBook(book: IBook) {
    this.books.push(book);
    this.booksSubject.next(this.books);
  }

  getBooks() {
    return this.booksSubject;
  }

  removeBook(id: number) {
    this.books = this.books.filter((book) => book.id !== id);
    this.booksSubject.next(this.books);
  }
}
