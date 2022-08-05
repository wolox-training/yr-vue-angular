import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent } from './books.component';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';

@NgModule({
  declarations: [BooksComponent, NavbarComponent],
  imports: [CommonModule, BooksRoutingModule],
  exports: [BooksComponent],
})
export class BooksModule {}
