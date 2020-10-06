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

  }

  async errorToast() {
    const toast = await this.toastController.create({
      message: 'Wrong password or email!',
      duration: 2000
    });
    toast.present();
  }

  async correctToast() {
    const toast = await this.toastController.create({
      message: 'Login successfully! ^^',
      duration: 2000
    });
    toast.present();
  }
}
