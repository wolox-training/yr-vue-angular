import { CommonModule, APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { fireEvent, render, waitFor } from '@testing-library/angular';
import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { AppRoutingModule } from '../../app-routing.module';
import { FormContainerComponent } from '../../components/form-container/form-container.component';
import { LOGIN_FIELDS } from '../../constants/form-account';
import { IFields } from 'src/app/interfaces/global.interface';

describe('FormContainerComponent', () => {
  const loginUserMock = jest.fn();
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
          emit: loginUserMock,
        } as any,
      },
      providers: [{ provide: APP_BASE_HREF, useValue: '/my/app' }],
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
    addValueEvent(email, 'ramos111com12');
    await waitFor(() => fireEvent.click(screen.getByText('Login')));

    expect(
      screen.getByText('El formato de mail no es correcto'),
    ).toBeInTheDocument();
    expect(loginUserMock).not.toHaveBeenCalled();
  });

  it('submitting correct form ', async () => {
    const email = screen.getByLabelText('Email');
    const password = screen.getByLabelText('Password');
    addValueEvent(email, 'samir.hernando@wolox.co');
    addValueEvent(password, 'Asd123');
    await waitFor(() => fireEvent.click(screen.getByText('Login')));

    expect(loginUserMock).toHaveBeenCalled();
  });
});

function addValueEvent(field: HTMLElement, value: string) {
  fireEvent.input(field, {
    target: {
      value: value,
    },
  });
}
