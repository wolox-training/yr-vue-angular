import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { FormContainerModule } from 'src/app/components/form-container/form-container.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    FormContainerModule,
    LoginRoutingModule,
    ReactiveFormsModule,
  ],
  exports: [],
})
export class LoginModule {}
