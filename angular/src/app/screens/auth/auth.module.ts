import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthComponent } from './auth.component';
import { AuthRoutingModule } from './auth-routing.module';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
import { BookListComponent } from './screens/book-list/book-list.component';
import { BookCardComponent } from 'src/app/components/book-card/book-card.component';
import { FilterBooksPipe } from 'src/app/pipes/filter-books.pipe';

@NgModule({
  declarations: [
    AuthComponent,
    NavbarComponent,
    BookListComponent,
    BookCardComponent,
    FilterBooksPipe,
  ],
  imports: [CommonModule, AuthRoutingModule, FormsModule],
})
export class AuthModule {}
