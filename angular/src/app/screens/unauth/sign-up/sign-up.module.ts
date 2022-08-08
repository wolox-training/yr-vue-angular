import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SignUpRoutingModule } from './sign-up-routing.module';
import { SignUpComponent } from './sign-up.component';
import { FormContainerModule } from 'src/app/components/form-container/form-container.module';

@NgModule({
  declarations: [SignUpComponent],
  imports: [
    CommonModule,
    FormContainerModule,
    ReactiveFormsModule,
    SignUpRoutingModule,
  ],
  exports: [],
})
export class SignUpModule {}
