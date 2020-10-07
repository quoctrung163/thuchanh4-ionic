import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ToastController } from '@ionic/angular';

import { UserDataService } from '../../model/user-data.service';

import { UserService } from '../../controller/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  registrationForm: FormGroup;
  emailInput: string;
  passInput: string;
  userInput: string;

  constructor(public toastController: ToastController) {
    this.registrationForm = new FormGroup({
      emailValidation: new FormControl('', [Validators.required, Validators.email, Validators.minLength(4)]),
      userNameValidation: new FormControl('', [Validators.required, Validators.minLength(4)]),
      passwordVaildation: new FormControl('', [Validators.required, Validators.minLength(4)])
    });
  }

  ngOnInit() {
  }

  regForm() {
    this.correctToast();
    console.log('userInput: ', this.userInput);
    console.log('passInput: ', this.passInput);
    console.log('emailInput: ', this.emailInput);
  }

  async errorToast() {
    const toast = await this.toastController.create({
      message: 'Register error, try again!',
      duration: 2000
    });
    toast.present();
  }

  async correctToast() {
    const toast = await this.toastController.create({
      message: 'Create new account successfully!',
      duration: 2000
    });
    toast.present();
  }
}
