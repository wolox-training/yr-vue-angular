import { Component } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IAuthUser, IUser } from 'src/app/interfaces/global.interface';
import { StatusRequest } from '../../../../constants/code-request';
import { LOGIN_FIELDS } from '../../../../constants/form-account';
import { REGEX } from '../../../../constants/regex-accounts';
import { UserService } from '../../../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  fields = LOGIN_FIELDS;
  buttonSend = 'Login';
  errorMessage!: string;
  formGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern(REGEX.password),
    ]),
  });

  constructor(private userService: UserService, private router: Router) {}

  handleOnSubmit(value: IUser): void {
    this.errorMessage = '';
    this.userService.login(value).subscribe(
      (response: HttpResponse<Object>) => {
        if (response.status === StatusRequest.Ok) {
          const token = response.headers.get('Access-Token');
          if (token) {
            const userAuthData: IAuthUser = {
              token: token,
              client: response.headers.get('client') || '',
              uid: response.headers.get('uid') || '',
            };
            this.userService.setToken(userAuthData);
            this.router.navigate(['/books']);
          }
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
