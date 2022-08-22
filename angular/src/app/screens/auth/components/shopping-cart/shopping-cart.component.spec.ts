import { render } from '@testing-library/angular';
import { fireEvent, screen } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { mockBook } from '../../../../helpers/mocks/mock-books';
import { ShoppingCartComponent } from './shopping-cart.component';

describe('ShoppingCartComponent', () => {
  beforeEach(async () => {
    await render(ShoppingCartComponent, {
      declarations: [ShoppingCartComponent],
      imports: [],
      componentProperties: {
        books: mockBook,
      },
    });
  });

  it('adding products to cart', () => {
    const buttonOpenCart = screen.getByTestId('button-open-cart');
    fireEvent.click(buttonOpenCart);

    expect(screen.getByText('Slow reading - John Miedema')).toBeInTheDocument();
  });

  it('removing products from cart', () => {
    const buttonOpenCart = screen.getByTestId('button-open-cart');
    fireEvent.click(buttonOpenCart);
    const buttonsDelete = screen.getAllByTestId('button-delete-book');
    fireEvent.click(buttonsDelete[0]);

    expect(screen.getByText('El carrito está vacío')).toBeInTheDocument();
  });
});
