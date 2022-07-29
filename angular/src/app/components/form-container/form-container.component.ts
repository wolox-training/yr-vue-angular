import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { CustomValidators } from 'src/app/helpers/utilities/customValidators';
import { Ifiels } from 'src/app/interfaces/global.interface';

@Component({
  selector: 'app-form-container',
  templateUrl: './form-container.component.html',
  styleUrls: ['./form-container.component.scss'],
})
export class FormContainerComponent {
  @Input() formFields!: Ifiels[];
  @Input() buttonSend!: string;
  @Output() handleOnSubmit = new EventEmitter<object>();

  userForm = new FormGroup(
    {
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', [Validators.required]),
    },
    [CustomValidators.MatchValidator('password', 'confirmPassword')],
  );

  sendForm() {
    this.handleOnSubmit.emit(this.userForm.value);
  }

  matchError(field: Ifiels) {
    if (field.type == 'password') {
      return (
        this.userForm.getError('mismatch') &&
        this.userForm.get('confirmPassword')?.touched
      );
    } else {
      return (
        this.userForm.get(field.key)?.invalid &&
        this.userForm.get(field.key)?.touched
      );
    }
  }
}
