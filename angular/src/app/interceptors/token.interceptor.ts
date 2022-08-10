import { Injectable, Injector } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';
import { IAuthUser } from '../interfaces/global.interface';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private injector: Injector) {}

  intercept(
    req: HttpRequest<unknown>,
    next: HttpHandler,
  ): Observable<HttpEvent<unknown>> {
    const userService = this.injector.get(UserService);
    const headers: IAuthUser = userService.getToken();
    req = req.clone({
      setHeaders: {
        'access-token': `Bearer ${headers.token}`,
        client: headers.client,
        uid: headers.uid,
      },
    });

    return next.handle(req);
  }
}
