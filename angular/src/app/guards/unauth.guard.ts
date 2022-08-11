import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Routes } from '../constants/routes';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root',
})
export class UnAuthGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
<<<<<<< HEAD
    const isLogin = this.userService.isLogged();
    if (isLogin) {
      return this.router.navigate(['/books']);
=======
    const isLogged = this.userService.isLogged();
    if (isLogged) {
      this.router.navigate([Routes.books]);

      return true;
>>>>>>> 6c7f379 (implement auth and unauth unit tests)
    }

    return !isLogged;
  }
}
