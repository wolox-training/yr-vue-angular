import { HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { SIGN_UP_FIELDS } from '../../constants/form-account';
import { IUser } from 'src/app/interfaces/global.interface';
import { UserService } from '../../services/user.service';
import { StatusRequest } from 'src/app/constants/code-request';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from 'src/app/helpers/utilities/custom-validators';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
})
export class SignUpComponent {
  fields = SIGN_UP_FIELDS;
  buttonSend = 'Sign Up';

  constructor(private userService: UserService) {}

  formControls = new FormGroup(
    {
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern('(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{6,}'),
      ]),
      passwordConfirmation: new FormControl('', [Validators.required]),
    },
    [CustomValidators.MatchValidator('password', 'passwordConfirmation')],
  );

  handleOnSubmit(value: IUser): void {
    this.userService
      .createUser(value)
      .subscribe((response: HttpResponse<Object>) => {
        if (response.status === StatusRequest.Created) {
          console.log('success');
        }
      });
  }
}
