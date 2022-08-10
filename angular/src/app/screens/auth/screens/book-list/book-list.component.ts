import { Component, OnInit } from '@angular/core';
import { IBook } from 'src/app/interfaces/global.interface';
import { BooksService } from '../../../../services/books.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
})
export class BookListComponent implements OnInit {
  books!: IBook[];
  inputSearch!: any;
  constructor(private booksService: BooksService) {}

  ngOnInit(): void {
    this.booksService.getBooks().subscribe((response: any) => {
      this.books = response;
    });
  }
}
