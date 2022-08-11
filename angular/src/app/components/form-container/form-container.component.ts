import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IFields, IUser } from 'src/app/interfaces/global.interface';

@Component({
  selector: 'app-form-container',
  templateUrl: './form-container.component.html',
  styleUrls: ['./form-container.component.scss'],
})
export class FormContainerComponent {
  @Input() formFields!: IFields[];
  @Input() buttonSend!: string;
  @Input() errorMessage!: string;
  @Input() formGroup!: FormGroup;
  @Output() handleOnSubmit = new EventEmitter<IUser>();

  sendForm() {
    if (this.formGroup.valid) {
      this.handleOnSubmit.emit(this.formGroup.value);
    } else {
      this.errorMessage = 'Hay campos incompletos';
      this.formGroup.markAllAsTouched();
      this.formGroup.updateValueAndValidity();
    }
  }

  matchError(field: IFields) {
    if (
      this.formGroup.get(field.key)?.invalid &&
      this.formGroup.get(field.key)?.touched
    ) {
      return true;
    }
    if (field.type == 'password') {
      return (
        this.formGroup.getError('mismatch') &&
        this.formGroup.get('passwordConfirmation')?.touched
      );
    }
  }
}
