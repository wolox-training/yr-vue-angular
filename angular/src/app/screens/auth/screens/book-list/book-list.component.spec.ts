import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { render } from '@testing-library/angular';
import { fireEvent, screen } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { BookListComponent } from './book-list.component';
import { BookCardComponent } from '../../../../components/book-card/book-card.component';
import { mockBook } from '../../../../helpers/mocks/mock-books';
import { FilterBooksPipe } from '../../../../pipes/filter-books.pipe';

describe('BoolistComponent ', () => {
  beforeEach(async () => {
    await render(BookListComponent, {
      declarations: [BookListComponent, BookCardComponent, FilterBooksPipe],
      imports: [HttpClientModule, FormsModule],
      componentProperties: {
        books: mockBook,
      },
    });
  });

  it('render all cards in the component', () => {
    const card = screen.getAllByTestId('book-card');
    expect(card).toHaveLength(mockBook.length);
  });

  it('check if the search bar exists', () => {
    const input = screen.getByRole('search');
    expect(input).toBeTruthy();
  });

  it('filter by true search parameter', () => {
    const input = screen.getByRole('search');
    addValueEvent(input, 'Slow reading');
    const card = screen.getAllByTestId('book-card');

    expect(card).toHaveLength(1);
    expect(screen.getByText('Slow reading')).toBeInTheDocument();
  });
});

function addValueEvent(field: HTMLElement, value: string) {
  fireEvent.input(field, {
    target: {
      value: value,
    },
  });
}
