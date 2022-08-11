import { Component, Input, OnInit } from '@angular/core';
import { IBook } from 'src/app/interfaces/global.interface';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss'],
})
export class BookCardComponent {
  @Input() book!: IBook;
}
