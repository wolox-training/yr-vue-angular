import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { AuthRoutingModule } from './auth-routing.module';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
import { BookListComponent } from './screens/book-list/book-list.component';

@NgModule({
  declarations: [AuthComponent, NavbarComponent, BookListComponent],
  imports: [CommonModule, AuthRoutingModule],
})
export class AuthModule {}
