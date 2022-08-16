import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BookCardComponent } from 'src/app/components/book-card/book-card.component';
import { FilterBooksPipe } from 'src/app/pipes/filter-books.pipe';
import { BookListRoutingModule } from './book-list-routing.module';
import { BookListComponent } from './book-list.component';

@NgModule({
  declarations: [BookListComponent, BookCardComponent, FilterBooksPipe],
  imports: [BookListRoutingModule, FormsModule, CommonModule],
})
export class BookListModule {}
