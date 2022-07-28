import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'prefix', redirectTo: 'sign-up' },
  {
    path: '',
    loadChildren: () =>
      import('./screens/users/users.module').then((m) => m.UsersModule),
  },

  { path: '**', redirectTo: '', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
