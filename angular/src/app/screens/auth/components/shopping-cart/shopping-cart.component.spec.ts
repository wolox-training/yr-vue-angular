import { render } from '@testing-library/angular';
import { fireEvent, screen } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { TranslateModule } from '@ngx-translate/core';
import { ShoppingCartComponent } from './shopping-cart.component';
import { TranslateMockPipe } from '../../../../helpers/mocks/translate-mock.pipe';
import { mockBook } from '../../../../helpers/mocks/mock-books';

describe('ShoppingCartComponent', () => {
  beforeEach(async () => {
    await render(ShoppingCartComponent, {
      declarations: [ShoppingCartComponent, TranslateMockPipe],
      imports: [TranslateModule],
      componentProperties: {
        books: mockBook,
      },
    });
  });

  it('removing products from cart', async () => {
    const buttonOpenCart = screen.getByTestId('button-open-cart');
    fireEvent.click(buttonOpenCart);

    expect(screen.getByText('shopping.emptyTitle')).toBeInTheDocument();
  });
});
