import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { NavbarComponent } from './navbar.component';
import { ShoppingCartComponent } from '../shopping-cart/shopping-cart.component';
import { LanguageModule } from '../../../../components/language/language.component.module';

@NgModule({
  declarations: [NavbarComponent, ShoppingCartComponent],
  imports: [CommonModule, TranslateModule, FormsModule, LanguageModule],
  exports: [NavbarComponent],
})
export class NavbarModule {}
