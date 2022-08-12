import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { unAuthRoutingModule } from './un-auth-routing.module';
import { UnAuthComponent } from './un-auth.component';

@NgModule({
  declarations: [UnAuthComponent],
  imports: [CommonModule, unAuthRoutingModule],
})
export class UnAuthModule {}
