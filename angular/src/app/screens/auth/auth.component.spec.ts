import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { render } from '@testing-library/angular';
import { fireEvent, screen } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';

describe('Render auth component', () => {
  let routerSpy = { navigate: jest.fn() };
  beforeEach(async () => {
    render(AuthComponent, {
      declarations: [AuthComponent, NavbarComponent],
      imports: [CommonModule, AuthRoutingModule, HttpClientModule],
      providers: [{ provide: Router, useValue: routerSpy }],
    });
  });

  it('logout button exists', async () => {
    const btnLogout = screen.getByText('Logout');
    fireEvent.click(btnLogout);

    expect(btnLogout).toBeTruthy();
  });

  it('verify session closure with the logout button', async () => {
    const btnLogout = screen.getByText('Logout');
    fireEvent.click(btnLogout);

    expect(routerSpy.navigate).toHaveBeenCalledWith(['/login']);
  });
});
