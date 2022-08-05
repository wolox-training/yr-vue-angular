import { HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Status } from '../../constants/codeRequest';
import { LOGIN_FIELDS } from '../../constants/formAccount';
import { IUser } from 'src/app/interfaces/global.interface';
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

  handleOnSubmit(value: IUser): void {
    this.errorMessage = '';
    this.userService.login(value).subscribe(
      (response: HttpResponse<Object>) => {
        if (response.status === Status.ok) {
          console.log(response.headers.get('Access-Token'));
        }
      },
      (error) => {
        if (error.status === Status.unAuthorized) {
          this.errorMessage = 'Credenciales incorrectas';
        }
      },
    );
  }
}
