import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { render } from '@testing-library/angular';
import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';

describe('Render auth component', () => {
  beforeEach(async () => {
    render(AuthComponent, {
      declarations: [AuthComponent, NavbarComponent],
      imports: [CommonModule, AuthRoutingModule, HttpClientModule],
    });
  });
  it('logout button exists', async () => {
    const btnLogout = screen.getByText('Logout');

    expect(btnLogout).toBeTruthy();
  });
});
