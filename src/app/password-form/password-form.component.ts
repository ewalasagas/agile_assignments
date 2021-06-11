import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {PasswordValidators} from './password.validators';

@Component({
  selector: 'password-form',
  templateUrl: './password-form.component.html',
  styleUrls: ['./password-form.component.css']
})
export class PasswordFormComponent {

  form = new FormGroup({
    account: new FormGroup({
      oldpassword: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ], PasswordValidators.checkOldPassword),
      newpassword: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      confirmpassword: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        PasswordValidators.confirmTwoPassword
      ])
  })
});

login() {
  this.form.setErrors({
    invalidLogin: true
  });
}

get oldpassword() {
  return this.form.get('account.oldpassword');
}

get newpassword() {
  return this.form.get('account.newpassword');
}

get confirmpassword() {
  return this.form.get('account.confirmpassword');
}

  //Check against an old password/form
  //check if 2 inputs are equal
}
