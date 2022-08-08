import { CommonModule, APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { fireEvent, render, waitFor } from '@testing-library/angular';
import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { AppRoutingModule } from '../../../app-routing.module';
import { LOGIN_FIELDS } from '../../../constants/form-account';
import { FormContainerModule } from '../../../components/form-container/form-container.module';
import { IFields } from 'src/app/interfaces/global.interface';

describe('Render LoginComponent', () => {
  beforeEach(async () => {
    render(LoginComponent, {
      declarations: [LoginComponent],
      imports: [
        CommonModule,
        LoginRoutingModule,
        ReactiveFormsModule,
        HttpClientModule,
        AppRoutingModule,
        FormContainerModule,
      ],
      componentProperties: {
        fields: LOGIN_FIELDS,
        buttonSend: 'Login',
      },
    });
  });

  it('check all empty fields', async () => {
    const form = screen.getByRole('form');
    fireEvent.submit(form);
    const fields: IFields[] = LOGIN_FIELDS;
    fields.map((field) => {
      expect(screen.getByText(field.errorMessage)).toBeInTheDocument();
    });
  });

  it('check fields with incorrect validation', async () => {
    const email = screen.getByLabelText(/Email/i);
    const button = screen.getByText('Login');
    addValueEvent(email, 'ramos111com12');
    await waitFor(() => fireEvent.blur(email));

    expect(
      screen.getByText('El formato de mail no es correcto'),
    ).toBeInTheDocument();

    expect(button).toBeDisabled();
  });

  it('submitting correct form ', async () => {
    const email = screen.getByLabelText('Email');
    const password = screen.getByLabelText('Password');
    addValueEvent(email, 'samir.hernando@wolox.co');
    addValueEvent(password, 'Asd1234');
    const button = screen.getByText('Login');
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
