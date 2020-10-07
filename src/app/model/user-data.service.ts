import { Injectable } from '@angular/core';
import { NumericValueAccessor } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { AccountService } from '../model/account.service';

interface UserInterface {
  email: string;
  username: string;
  password: string;
  amount: number;
}

@Injectable({
  providedIn: 'root'
})

export class UserDataService {

  constructor(private storage: Storage) {
    this.getOldValue();
  }
  static acc: AccountService;
  static accDetail: AccountService;

  static listAccount: AccountService[] = [];
  static storageStatic: Storage;

  acc1: AccountService;
  accDetail: AccountService;
  listAccount: AccountService[] = [];
  oldStorage: UserInterface[] = [];



  static setAccount(email: string, username: string, password: string, amount: number): AccountService {
    this.acc = new AccountService(email, username, password, amount);
    return this.acc;
  }

  static checkLogin(email: string, password: string): boolean {
    this.setDetailAccount();
    let bool = false;
    this.listAccount.map((item, index) => {
      if (item.email === email && item.password === password) {
        bool = true;
      }
    });
    return bool;
  }

  static addAccount(account: AccountService) {
    this.listAccount.push(account);
  }

  static setDetailAccount(): AccountService {
    // const arr = [{
    //   email: 'quoctrung123@gmail.com',
    //   username: 'quoctrung163',
    //   password: '1234',
    //   amount: 1000
    // }, {
    //   email: 'miyucoder@gmail.com',
    //   username: 'miyucoder',
    //   password: '1234',
    //   amount: 100000
    // }, {
    //   email: 'trungpq@gmail.com',
    //   username: 'trungpq',
    //   password: '1234',
    //   amount: 154545
    //   }];
    const arr = [];

    ///
    arr.map(item => {
      UserDataService.addAccount(new AccountService(item.email, item.username, item.password, item.amount));
    });

    UserDataService.listAccount.map(item => {
      this.accDetail = UserDataService.setAccount(item.email, item.userName, item.password, item.amount);
    });
    return this.accDetail;
  }

  setValue(key: string, value: any) {
    this.storage.set('email', UserDataService.listAccount);
  }

  getValue(key: string) {
    this.storage.get(key).then((val) => {
      console.log(val);
    }).catch(err => {
      console.log(err);
    });
  }

  getOldValue() {
    this.storage.get('email').then((value) => {
      value.map(item => {
        this.oldStorage.push(item);
      });
    });
    console.log('oldstorage', this.oldStorage);
  }
}
