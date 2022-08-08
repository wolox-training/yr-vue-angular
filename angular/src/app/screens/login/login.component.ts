import { Component } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IUser } from 'src/app/interfaces/global.interface';
import { StatusRequest } from '../../constants/code-request';
import { LOGIN_FIELDS } from '../../constants/form-account';
import { REGEX } from '../../constants/regex-accounts';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  fields = LOGIN_FIELDS;
  buttonSend = 'Login';
  errorMessage!: string;

  constructor(private userService: UserService) {}

  FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern(REGEX.password),
    ]),
  });

  handleOnSubmit(value: IUser): void {
    this.errorMessage = '';
    this.userService.login(value).subscribe(
      (response: HttpResponse<Object>) => {
        if (response.status === StatusRequest.Ok) {
          console.log(response.headers.get('Access-Token'));
        }
      },
      (error: any) => {
        if (error.status === StatusRequest.UnAuthorized) {
          this.errorMessage = 'Credenciales incorrectas';
        }
      },
    );
  }
}
