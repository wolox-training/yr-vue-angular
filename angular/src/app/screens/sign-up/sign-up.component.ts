import { Component } from '@angular/core';
import { SIGN_UP_FIELDS } from 'src/app/constants/formAccount';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})

export class SignUpComponent {
  fields = SIGN_UP_FIELDS;
  buttonSend= 'Sign Up'

  handleOnSubmit(value: object) {
    console.log(value);
  }
}
