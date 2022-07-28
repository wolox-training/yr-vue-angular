import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})

export class SignUpComponent implements OnInit {
  userForm!: FormGroup;

  constructor(private readonly fb: FormBuilder) {}

  handleSingUp(): void {
    console.log(this.userForm.value)
  }

  ngOnInit(): void {
    this.userForm = this.initForm();
  }

  initForm() {
    return this.fb.group(
      {
        first_name: ['', Validators.required],
        last_name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.pattern('(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{8,}'),
          ],
        ],
        password_confirmation: ['', Validators.required],
      },
      {
        validators: this.equalTo,
      }
    );
  }

  get nameControl() {
    return this.userForm.get('first_name');
  }

  get lastNameControl() {
    return this.userForm.get('last_name');
  }

  get emailControl() {
    return this.userForm.get('email');
  }

  get passwordControl() {
    return this.userForm.get('password');
  }

  get passwordConfirmationControl() {
    return this.userForm.get('password_confirmation');
  }

  equalTo(userForm: FormGroup) {
    return userForm.get('password')?.value ===
      userForm.get('password_confirmation')?.value
      ? null
      : { notSame: true };
  }
}
