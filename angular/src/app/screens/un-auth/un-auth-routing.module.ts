import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'sign-up',
    loadChildren: () =>
      import('./screens/sign-up/sign-up.module').then((m) => m.SignUpModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./screens/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class unAuthRoutingModule {}
