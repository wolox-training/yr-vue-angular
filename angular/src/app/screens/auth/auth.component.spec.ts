import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { render } from '@testing-library/angular';
import { fireEvent, screen } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { NavbarModule } from './components/navbar/navbar.module';
import { AuthGuard } from '../../guards/auth.guard';
import { UserService } from '../../services/user.service';
import { mockToken } from '../../helpers/mocks/mock-token';
import { Routes } from '../../constants/routes';
import { TranslateMockPipe } from '../../helpers/mocks/translate-mock.pipe';

function fakeRouterState(url: string): RouterStateSnapshot {
  return {
    url,
  } as RouterStateSnapshot;
}
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
      declarations: [AuthComponent, TranslateMockPipe],
      imports: [
        CommonModule,
        AuthRoutingModule,
        HttpClientModule,
        NavbarModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: (http: HttpClient) => {
              return new TranslateHttpLoader(http);
            },
            deps: [HttpClient],
          },
        }),
      ],
      providers: [{ provide: Router, useValue: routerSpy }],
    });
  });

  beforeEach(() => {
    guard = new AuthGuard(serviceStub as UserService, routerSpy);
    localStorage.setItem('userToken', JSON.stringify(mockToken));
  });

  it('logout button exists', async () => {
    const btnLogout = screen.getByText('navbar.logout');
    fireEvent.click(btnLogout);

    expect(btnLogout).toBeTruthy();
  });

  it('verify session closure with the logout button', async () => {
    const btnLogout = screen.getByText('navbar.logout');
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
