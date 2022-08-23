import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { render } from '@testing-library/angular';
import { unAuthRoutingModule } from './un-auth-routing.module';
import { UnAuthComponent } from './un-auth.component';
import { Routes } from '../../constants/routes';
import { UnAuthGuard } from '../../guards/unauth.guard';
import { mockToken } from '../../helpers/mocks/mock-token';
import { UserService } from '../../services/user.service';

function fakeRouterState(url: string): RouterStateSnapshot {
  return {
    url,
  } as RouterStateSnapshot;
}

describe('Render auth component', () => {
  let routerSpy: any = { navigate: jest.fn() };
  let guard: UnAuthGuard;
  let serviceStub: any = {
    isLogged: () => !!localStorage.getItem('userToken'),
  };
  const dummyRoute = {} as ActivatedRouteSnapshot;
  const fakeUrls = [Routes.login, Routes.signup];

  beforeEach(async () => {
    render(UnAuthComponent, {
      declarations: [UnAuthComponent],
      imports: [CommonModule, unAuthRoutingModule, HttpClientModule],
      providers: [{ provide: Router, useValue: routerSpy }],
    });
  });

  beforeEach(() => {
    guard = new UnAuthGuard(serviceStub as UserService, routerSpy);
  });

  it('grants access', () => {
    localStorage.removeItem('userToken');
    fakeUrls.forEach((fakeUrl) => {
      const canActivate = guard.canActivate(
        dummyRoute,
        fakeRouterState(fakeUrl),
      );

      expect(canActivate).toBe(true);
    });
  });

  it('enter a route with a token', () => {
    localStorage.setItem('userToken', JSON.stringify(mockToken));
    const canActivate = guard.canActivate(
      dummyRoute,
      fakeRouterState(Routes.books),
    );
    expect(canActivate).toBe(true);
    expect(routerSpy.navigate).toHaveBeenCalledWith([Routes.books]);
  });
});
