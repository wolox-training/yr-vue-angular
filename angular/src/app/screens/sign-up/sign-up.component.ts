import { HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { SIGN_UP_FIELDS } from '../../constants/formAccount';
import { IUser } from 'src/app/interfaces/global.interface';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
})
export class SignUpComponent {
  fields = SIGN_UP_FIELDS;
  buttonSend = 'Sign Up';

  constructor(private userService: UserService) {}

  handleOnSubmit(value: IUser): void {
    this.userService
      .createUser(value)
      .subscribe((response: HttpResponse<Object>) => {
        if (response.status === 201) {
          console.log('success');
        }
      });
  }
}
