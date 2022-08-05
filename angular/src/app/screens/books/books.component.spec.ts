import { render } from '@testing-library/angular';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { BooksComponent } from './books.component';
import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { CommonModule } from '@angular/common';
import { BooksRoutingModule } from './books-routing.module';
import { HttpClientModule } from '@angular/common/http';

describe('Render navbar component', () => {
  beforeEach(async () => {
    render(BooksComponent, {
      declarations: [BooksComponent, NavbarComponent],
      imports: [CommonModule, BooksRoutingModule, HttpClientModule],
    });
  });
  it('logout button exists', async () => {
    const btnLogout = screen.getByText('Logout');

    expect(btnLogout).toBeTruthy();
  });
});
