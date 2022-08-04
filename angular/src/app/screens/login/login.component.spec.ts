import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../../app-routing.module';
import { FormContainerComponent } from '../../components/form-container/form-container.component';
import { APP_BASE_HREF } from '@angular/common';
import { fireEvent, render, waitFor } from '@testing-library/angular';
import { screen } from '@testing-library/dom';
import { LOGIN_FIELDS } from '../../constants/formAccount';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import '@testing-library/jest-dom';

describe('FormContainerComponent', () => {
  const createUserMock = jest.fn();
  beforeEach(async () => {
    render(FormContainerComponent, {
      declarations: [LoginComponent, FormContainerComponent],
      imports: [
        CommonModule,
        LoginRoutingModule,
        ReactiveFormsModule,
        HttpClientModule,
        AppRoutingModule,
      ],
      componentProperties: {
        formFields: LOGIN_FIELDS,
        buttonSend: 'Login',
        handleOnSubmit: {
          emit: createUserMock,
        } as any,
      },
      providers: [{ provide: APP_BASE_HREF, useValue: '/my/app' }],
    });
  });

  it('check all empty fields', async () => {
    const form = screen.getByRole('form');
    fireEvent.submit(form);
    const errorSpans = screen.getAllByTestId('error-span');
    expect(errorSpans).toHaveLength(2);
  });

  it('check fields with incorrect validation', async () => {
    const email = screen.getByLabelText(/Email/i);
    fireEvent.input(email, {
      target: {
        value: 'ramos111com12',
      },
    });
    await waitFor(() => fireEvent.click(screen.getByText('Login')));

    expect(
      screen.getByText('El formato de mail no es correcto'),
    ).toBeInTheDocument();

    expect(createUserMock).not.toHaveBeenCalled();
  });

  it('submitting correct form ', async () => {
    const email = screen.getByLabelText('Email');
    const password = screen.getByLabelText('Password');
    addValueEvent(email, 'samir.hernando@wolox.co');
    addValueEvent(password, 'Asd123');
    await waitFor(() => fireEvent.click(screen.getByText('Login')));

    expect(createUserMock).toHaveBeenCalled();
  });
});

function addValueEvent(field: HTMLElement, value: string) {
  fireEvent.input(field, {
    target: {
      value: value,
    },
  });
}
