import { CommonModule, APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { fireEvent, render, waitFor } from '@testing-library/angular';
import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { SignUpRoutingModule } from './sign-up-routing.module';
import { SignUpComponent } from './sign-up.component';
import { AppRoutingModule } from '../../../app-routing.module';
import { SIGN_UP_FIELDS } from '../../../constants/form-account';
import { FormContainerModule } from '../../../components/form-container/form-container.module';
import { IFields } from 'src/app/interfaces/global.interface';

describe('Render SignUpComponent', () => {
  beforeEach(async () => {
    render(SignUpComponent, {
      declarations: [SignUpComponent],
      imports: [
        CommonModule,
        SignUpRoutingModule,
        ReactiveFormsModule,
        HttpClientModule,
        AppRoutingModule,
        FormContainerModule,
      ],
      componentProperties: {
        fields: SIGN_UP_FIELDS,
        buttonSend: 'Sign Up',
      },
    });
  });

  it('check all empty fields', async () => {
    const form = screen.getByRole('form');
    const button = screen.getByText('Sign Up');
    fireEvent.submit(form);
    const fields: IFields[] = SIGN_UP_FIELDS;

    fields.map((field) => {
      expect(screen.getByText(field.errorMessage)).toBeInTheDocument();
    });
    expect(button).toBeDisabled();
  });

  it('some wrong field shows an error and does not send the form', async () => {
    const email = screen.getByLabelText(/Email/i);
    const button = screen.getByText('Sign Up');
    addValueEvent(email, 'ramos111com12');
    await waitFor(() => fireEvent.blur(email));

    expect(
      screen.getByText('El email es requerido y debe ser válido'),
    ).toBeInTheDocument();

    expect(button).toBeDisabled();
  });

  it('submitting form and redirecting to login', async () => {
    const userName = screen.getByLabelText('Nombre');
    const lastName = screen.getByLabelText('Apellido');
    const email = screen.getByLabelText('Email');
    const password = screen.getByLabelText('Password');
    const passwordConfirmation = screen.getByLabelText(
      'Confirmación de Password',
    );
    const button = screen.getByText('Sign Up');

    addValueEvent(userName, 'Yonathan Ramos');
    addValueEvent(lastName, 'Ramos');
    addValueEvent(email, 'ramos@angular.com');
    addValueEvent(password, 'Admin1234');
    addValueEvent(passwordConfirmation, 'Admin1234');
    await waitFor(() => fireEvent.click(button));
    expect(button).toBeEnabled();
  });
});

function addValueEvent(field: HTMLElement, value: string) {
  fireEvent.input(field, {
    target: {
      value: value,
    },
  });
}
