import { Component } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IUser } from 'src/app/interfaces/global.interface';
import { StatusRequest } from '../../constants/code-request';
import { SIGN_UP_FIELDS } from '../../constants/form-account';
import { REGEX } from '../../constants/regex-accounts';
import { CustomValidators } from '../../helpers/utilities/custom-validators';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
})
export class SignUpComponent {
  fields = SIGN_UP_FIELDS;
  buttonSend = 'Sign Up';

  constructor(private userService: UserService) {}

  FormGroup = new FormGroup(
    {
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(REGEX.password),
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
