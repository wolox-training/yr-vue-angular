import { Component, OnInit } from '@angular/core';
import { IBook } from 'src/app/interfaces/global.interface';
import { FilterBooksPipe } from 'src/app/pipes/filter-books.pipe';
import { BooksService } from '../../../../services/books.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {
  books!: IBook[];
  inputSearch!: string;
  pipe: FilterBooksPipe = new FilterBooksPipe();

  constructor(private booksService: BooksService) {}

  ngOnInit(): void {
    this.booksService.getBooks().subscribe((response: any) => {
      this.books = response;
    });
  }

  trackByBooks(index: number, item: IBook): number {
    return item.id;
  }

  get hasBooks(): boolean {
    return this.pipe.transform(this.books, this.inputSearch).length > 0;
  }
}
