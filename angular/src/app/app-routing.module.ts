import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnAuthGuard } from './guards/unauth.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
  },
  {
    path: 'sign-up',
    canActivate: [UnAuthGuard],
    loadChildren: () =>
      import('./screens/unauth/sign-up/sign-up.module').then(
        (m) => m.SignUpModule,
      ),
  },
  {
    path: 'login',
    canActivate: [UnAuthGuard],
    loadChildren: () =>
      import('./screens/unauth/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'books',
    loadChildren: () =>
      import('./screens/auth/auth.module').then((m) => m.AuthModule),
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
