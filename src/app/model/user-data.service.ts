import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { AccountService } from '../model/account.service';

@Injectable({
  providedIn: 'root'
})

export class UserDataService {
  acc: AccountService;
  accDetail: AccountService;
  oldListAccount: AccountService[] = [];
  newListAccount: AccountService[] = [];

  constructor(public storage: Storage) {

  }

  setDetailAccount(): AccountService {

    this.oldListAccount.map(item => {
      this.addAccount(new AccountService(item.email, item.userName, item.password, item.amount));
    });

    this.newListAccount.map(item => {
      this.accDetail = this.setAccount(item.email, item.userName, item.password, item.amount);
    });
    return this.accDetail;
  }

  checkLogin(email: string, password: string): boolean {
    this.setDetailAccount();
    let bool = false;
    this.newListAccount.map((item, index) => {
      if (item.email === email && item.password === password) {
        bool = true;
      }
    });
    return bool;
  }

  setAccount(email: string, username: string, password: string, amount: number): AccountService {
    this.acc = new AccountService(email, username, password, amount);
    return this.acc;
  }

  addAccount(account: AccountService) {
    this.newListAccount.push(account);
  }

  getValue(key: string) {
    this.storage.get(key).then((val) => {
      console.log(val);
    }).catch(err => {
      console.log(err);
    });
  }

  async getOldValue(key: string) {
    await this.storage.get(key).then((value) => {
      value.map(item => {
        this.oldListAccount.push(new AccountService(item.email, item.userName, item.password, item.amount));
      });
    });
  }

  async setValue(key: string, value: any) {
    await this.storage.set(key, value);
  }

  async setNewArray(email?: string, userName?: string, password?: string) {
    await this.oldListAccount.map(item => {
      if (email !== undefined && userName !== undefined && password !== undefined) {
        this.newListAccount.push(new AccountService(item.email, item.userName, item.password, item.amount),
          new AccountService(email, userName, password, 44444));
      } else {
        this.newListAccount.push(new AccountService(item.email, item.userName, item.password, item.amount));
      }
      // if (email === undefined || userName === undefined || password === undefined) {
      // } else {
      //   this.newListAccount.push(new AccountService(item.email, item.userName, item.password, item.amount),
      //     new AccountService(email, userName, password, 44444));
      // }
    });

    // const uniqueArray = findEmail.filter((thing, index) => {
    //   const emailStringify = JSON.stringify(thing);
    //   return index === findEmail.findIndex(obj => {
    //     return JSON.stringify(obj) === emailStringify;
    //   });
    // });
  }

  async getLocalStorageSync(key: string, value: any, email?: string, userName?: string, password?: string) {
    await this.getOldValue(key);
    await this.setNewArray(email, userName, password);
    await this.setValue(key, value);
  }

  async initialState(key: string) {
    await this.getOldValue(key);
    await this.setNewArray();
  }
}
