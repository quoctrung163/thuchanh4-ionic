import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ToastController } from '@ionic/angular';

import { UserDataService } from '../../model/user-data.service';

import { UserService } from '../../controller/user.service';
import { Router } from '@angular/router';

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

  constructor(public toastController: ToastController, public userDataService: UserDataService, private router: Router) {
    this.registrationForm = new FormGroup({
      emailValidation: new FormControl('', [Validators.required, Validators.email, Validators.minLength(4)]),
      userNameValidation: new FormControl('', [Validators.required, Validators.minLength(4)]),
      passwordVaildation: new FormControl('', [Validators.required, Validators.minLength(4)])
    });
  }

  ngOnInit() {
    this.userDataService.initialState('data');
  }

  regForm() {
    const findEmail = this.userDataService.oldListAccount.find(item => {
      return item.email === this.emailInput;
    });

    const findUserName = this.userDataService.oldListAccount.find(item => {
      return item.userName === this.userInput;
    });

    if (findEmail === undefined && findUserName === undefined) {
      this.correctToast();
      this.router.navigateByUrl('/home');
      this.userDataService.setNewArray(this.emailInput, this.userInput, this.passInput);
    } else {
      this.errorToast('Register failed! Try again, may be username or email has exist');
    }

    console.log('new data', this.userDataService.newListAccount);
  }

  async errorToast(err: string) {
    const toast = await this.toastController.create({
      message: err,
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
