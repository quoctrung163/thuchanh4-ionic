import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registrationForm: FormGroup;
  constructor() {
    this.registrationForm = new FormGroup({
      emailValidation: new FormControl('', [Validators.required, Validators.email, Validators.minLength(4)]),
      userNameValidation: new FormControl('', [Validators.required, Validators.minLength(4)]),
      passwordVaildation: new FormControl('', [Validators.required, Validators.minLength(4)])
    });
  }

  ngOnInit() {
  }

}
