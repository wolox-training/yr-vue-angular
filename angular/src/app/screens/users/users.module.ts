import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { FormContainerComponent } from './components/form-container/form-container.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    UsersComponent,
    FormContainerComponent,
    SignUpComponent,
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,ReactiveFormsModule
  ]
})
export class UsersModule { }
