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
  @Input() FormGroup!: FormGroup;

  sendForm() {
    if (this.FormGroup.valid) {
      this.handleOnSubmit.emit(this.FormGroup.value);
    } else {
      this.errorMessage = 'Hay campos incompletos';
      this.FormGroup.markAllAsTouched();
      this.FormGroup.updateValueAndValidity();
    }
  }

  matchError(field: IFields) {
    if (
      this.FormGroup.get(field.key)?.invalid &&
      this.FormGroup.get(field.key)?.touched
    ) {
      return true;
    }
    if (field.type == 'password') {
      return (
        this.FormGroup.getError('mismatch') &&
        this.FormGroup.get('passwordConfirmation')?.touched
      );
    }
  }
}
