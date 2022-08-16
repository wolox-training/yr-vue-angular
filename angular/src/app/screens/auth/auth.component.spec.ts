import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { render } from '@testing-library/angular';
import { fireEvent, screen } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { AuthGuard } from '../../guards/auth.guard';
import { UserService } from '../../services/user.service';
import { mockToken } from '../../helpers/mocks/mock-token';
import { Routes } from 'src/app/constants/routes';

describe('Render auth component', () => {
  let routerSpy: any = { navigate: jest.fn() };
  let guard: AuthGuard;
  let serviceStub: any = {
    isLogged: () => !!localStorage.getItem('userToken'),
  };
  const dummyRoute = {} as ActivatedRouteSnapshot;
  const fakeUrl = 'books';

  beforeEach(async () => {
    render(AuthComponent, {
      declarations: [AuthComponent, NavbarComponent],
      imports: [CommonModule, AuthRoutingModule, HttpClientModule],
      providers: [{ provide: Router, useValue: routerSpy }],
    });
  });

  beforeEach(() => {
    guard = new AuthGuard(serviceStub as UserService, routerSpy);
    localStorage.setItem('userToken', JSON.stringify(mockToken));
  });

  it('logout button exists', async () => {
    const btnLogout = screen.getByText('Logout');
    fireEvent.click(btnLogout);

    expect(btnLogout).toBeTruthy();
  });

  it('verify session closure with the logout button', async () => {
    const btnLogout = screen.getByText('Logout');
    fireEvent.click(btnLogout);

    expect(routerSpy.navigate).toHaveBeenCalledWith([Routes.login]);
  });

  it('grants access', () => {
    const canActivate = guard.canActivate(dummyRoute, fakeRouterState(fakeUrl));

    expect(canActivate).toBe(true);
  });

  it('enter a route without a token', () => {
    localStorage.removeItem('userToken');
    const canActivate = guard.canActivate(dummyRoute, fakeRouterState(fakeUrl));

    expect(canActivate).toBe(false);
  });
});

function fakeRouterState(url: string): RouterStateSnapshot {
  return {
    url,
  } as RouterStateSnapshot;
}
