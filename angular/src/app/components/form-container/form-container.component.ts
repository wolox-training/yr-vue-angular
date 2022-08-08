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
  @Output() handleOnSubmit = new EventEmitter<IUser>();
  @Input() errorMessage!: string;
  @Input() formControls!: FormGroup;

  sendForm() {
    if (this.formControls.valid) {
      this.handleOnSubmit.emit(this.formControls.value);
    } else {
      this.errorMessage = 'Hay campos incompletos';
      this.formControls.markAllAsTouched();
      this.formControls.updateValueAndValidity();
    }
  }

  matchError(field: IFields) {
    if (
      this.formControls.get(field.key)?.invalid &&
      this.formControls.get(field.key)?.touched
    ) {
      return true;
    }
    if (field.type == 'password') {
      return (
        this.formControls.getError('mismatch') &&
        this.formControls.get('passwordConfirmation')?.touched
      );
    }
  }
}
