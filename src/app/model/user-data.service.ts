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

  acc1: AccountService;
  accDetail1: AccountService;
  listAccount1: AccountService[] = [];
  oldStorage: UserInterface[] = [];

  setDetailAccount1(): AccountService {
    const arr = [{
      email: 'quoctrung123@gmail.com',
      username: 'quoctrung163',
      password: '1234',
      amount: 1000
    }, {
      email: 'miyucoder@gmail.com',
      username: 'miyucoder',
      password: '1234',
      amount: 100000
    }, {
      email: 'trungpq@gmail.com',
      username: 'trungpq',
      password: '1234',
      amount: 154545
    }];

    arr.map(item => {
      this.addAccount(new AccountService(item.email, item.username, item.password, item.amount));
    });

    this.listAccount1.map(item => {
      this.accDetail1 = this.setAccount(item.email, item.userName, item.password, item.amount);
    });
    return this.accDetail1;
  }

  checkLogin(email: string, password: string): boolean {
    this.setDetailAccount1();
    let bool = false;
    this.listAccount1.map((item, index) => {
      if (item.email === email && item.password === password) {
        bool = true;
      }
    });
    return bool;
  }

  setAccount(email: string, username: string, password: string, amount: number): AccountService {
    this.acc1 = new AccountService(email, username, password, amount);
    return this.acc1;
  }

  addAccount(account: AccountService) {
    this.listAccount1.push(account);
  }

  setValue(key: string, value: any) {
    this.storage.set('email', this.listAccount1);
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
