import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { UnAuthGuard } from './guards/unauth.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
  },
  {
    path: 'auth',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./screens/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'un-auth',
    canActivate: [UnAuthGuard],
    loadChildren: () =>
      import('./screens/un-auth/un-auth.module').then((m) => m.UnAuthModule),
  },
  { path: '**', redirectTo: 'un-auth', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
