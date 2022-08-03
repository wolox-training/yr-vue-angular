import { HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Status } from 'src/app/constants/codeRequest';
import { SIGN_UP_FIELDS } from 'src/app/constants/formAccount';
import { IUser } from 'src/app/interfaces/global.interface';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {
  fields = SIGN_UP_FIELDS;
  buttonSend = 'Sign Up';

  constructor(private userService: UserService) {}

  handleOnSubmit(value: IUser): void {
    this.userService
      .createUser(value)
      .subscribe((response: HttpResponse<Object>) => {
        if (response.status === Status.success) {
          console.log('success');
        }
      });
  }
}
