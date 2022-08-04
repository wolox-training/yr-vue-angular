import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { CustomValidators } from '../../helpers/utilities/customValidators';
import { IFields, IUser } from 'src/app/interfaces/global.interface';

@Component({
  selector: 'app-form-container',
  templateUrl: './form-container.component.html',
  styleUrls: ['./form-container.component.scss'],
})
export class FormContainerComponent implements OnInit {
  @Input() formFields!: IFields[];
  @Input() buttonSend!: string;
  @Output() handleOnSubmit = new EventEmitter<IUser>();
  @Input() mensajeError!: string;
  userForm: any = {};

  validations: any = {
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern('(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{6,}'),
    ]),
    passwordConfirmation: new FormControl('', [Validators.required]),
  };

  ngOnInit(): void {
    this.formFields.map((field) => {
      this.userForm[field.key] = this.validations[field.key];
    });
    this.userForm = new FormGroup(this.userForm, [
      CustomValidators.MatchValidator('password', 'passwordConfirmation'),
    ]);
  }
  sendForm() {
    if (this.userForm.valid) {
      this.handleOnSubmit.emit(this.userForm.value);
    } else {
      this.mensajeError = 'Hay campos incompletos';
      this.userForm.markAllAsTouched();
      this.userForm.updateValueAndValidity();
    }
  }

  matchError(field: IFields) {
    if (
      this.userForm.get(field.key)?.invalid &&
      this.userForm.get(field.key)?.touched
    ) {
      return true;
    }

    if (field.type == 'password') {
      return (
        this.userForm.getError('mismatch') &&
        this.userForm.get('passwordConfirmation')?.touched
      );
    }
  }
}
