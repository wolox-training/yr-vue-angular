import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../../app-routing.module';
import { FormContainerComponent } from '../../components/form-container/form-container.component';
import { SignUpRoutingModule } from './sign-up-routing.module';
import { SignUpComponent } from './sign-up.component';
import { APP_BASE_HREF } from '@angular/common';

import { fireEvent, render, waitFor } from '@testing-library/angular';
import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { SIGN_UP_FIELDS } from '../../constants/formAccount';

describe('FormContainerComponent', () => {
  const createUserMock = jest.fn();
  beforeEach(async () => {
    render(FormContainerComponent, {
      declarations: [SignUpComponent, FormContainerComponent],
      imports: [
        CommonModule,
        SignUpRoutingModule,
        ReactiveFormsModule,
        HttpClientModule,
        AppRoutingModule,
      ],
      componentProperties: {
        formFields: SIGN_UP_FIELDS,
        buttonSend: 'Sign Up',
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

    expect(errorSpans).toHaveLength(5);
  });

  it('some wrong field shows an error and does not send the form', async () => {
    const email = screen.getByLabelText(/Email/i);
    fireEvent.input(email, {
      target: {
        value: 'ramos111com12',
      },
    });
    await waitFor(() => fireEvent.click(screen.getByText('Sign Up')));

    expect(
      screen.getByText('El email es requerido y debe ser válido'),
    ).toBeInTheDocument();

    expect(createUserMock).not.toHaveBeenCalled();
  });

  it('submitting form and redirecting to login', async () => {
    const userName = screen.getByLabelText('Nombre');
    const lastName = screen.getByLabelText('Apellido');
    const email = screen.getByLabelText('Email');
    const password = screen.getByLabelText('Password');
    const passwordConfirmation = screen.getByLabelText(
      'Confirmación de Password',
    );
    addValueEvent(userName, 'Yonathan Ramos');
    addValueEvent(lastName, 'Ramos');
    addValueEvent(email, 'ramos@angular.com');
    addValueEvent(password, 'Admin1234');
    addValueEvent(passwordConfirmation, 'Admin1234');
    await waitFor(() => fireEvent.click(screen.getByText('Sign Up')));

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
