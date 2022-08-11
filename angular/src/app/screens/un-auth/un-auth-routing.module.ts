import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UnauthGuard } from 'src/app/guards/unauth.guard';

const routes: Routes = [
  {
    path: 'sign-up',
    canActivate: [UnauthGuard],
    loadChildren: () =>
      import('./screens/sign-up/sign-up.module').then((m) => m.SignUpModule),
  },
  {
    path: 'login',
    canActivate: [UnauthGuard],
    loadChildren: () =>
      import('./screens/login/login.module').then((m) => m.LoginModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class unAuthRoutingModule {}
