import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { AuthRoutingModule } from './auth-routing.module';
import { NavbarComponent } from 'src/app/screens/auth/components/navbar/navbar.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';

@NgModule({
  declarations: [AuthComponent, NavbarComponent, ShoppingCartComponent],
  imports: [CommonModule, AuthRoutingModule],
})
export class AuthModule {}
