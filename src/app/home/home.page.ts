import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Validators, FormGroup, FormControl } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

import { Storage } from '@ionic/storage';

import { UserDataService } from '../model/user-data.service';

import { UserService } from '../controller/user.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  registrationForm: FormGroup;
  emailInput: string;
  passInput: string;

  constructor(private storage: Storage, public userDataService: UserDataService, private router: Router,
              public navCtrl: NavController, public toastController: ToastController) {
    this.registrationForm = new FormGroup({
      emailValidation: new FormControl('', [Validators.required, Validators.email, Validators.minLength(4)]),
      passwordVaildation: new FormControl('', [Validators.required, Validators.minLength(4)])
    });
  }

  logForm() {
    if (UserService.checkLogin(this.emailInput, this.passInput)) {
      this.router.navigateByUrl('/dashboard');
      this.correctToast();
    } else {
      this.errorToast();
    }
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

  async openAll() {
    await this.logForm();
  }
}
