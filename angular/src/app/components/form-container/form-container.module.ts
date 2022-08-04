import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormContainerComponent } from './form-container.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [FormContainerComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [FormContainerComponent],
})
export class FormContainerModule {}
