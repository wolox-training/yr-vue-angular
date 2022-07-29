import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpRoutingModule } from './sign-up-routing.module';
import { SignUpComponent } from './sign-up.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormContainerComponent } from 'src/app/components/form-container/form-container.component';

@NgModule({
  declarations: [
    SignUpComponent,FormContainerComponent
  ],
  imports: [
    CommonModule,SignUpRoutingModule,ReactiveFormsModule
  ],exports:[
    SignUpComponent,FormContainerComponent,
    CommonModule,ReactiveFormsModule,

  ]
})
export class SignUpModule { }
