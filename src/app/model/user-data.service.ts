import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { AccountService } from '../model/account.service';

@Injectable({
  providedIn: 'root'
})

export class UserDataService {

  constructor(private storage: Storage) {
    // this.acc = new AccountService('trung', 'trung', 'trung', 'trung');
  }
  static acc: AccountService;

  listAccount: AccountService[] = [];

  static setAccount(): AccountService {
    this.acc = new AccountService('quoctrung163@gmail.com', 'quoctrung163', '1234', 10000);
    return this.acc;
  }



  setValue(key: string, value: any) {
    this.storage.set('email', 'gjagjakgjkajgk');
  }

  getValue(key: string) {
    this.storage.get(key).then((val) => {
      console.log(val);
      console.log(UserDataService.setAccount());
      this.addAccount(new AccountService(val.email, 'trungphan', '12345', 4444));
      console.log(this.listAccount);
      // this.addAccount(new AccountService())
    }).catch(err => {
      console.log(err);
    });
  }

  addAccount(account: AccountService) {
    this.listAccount.push(account);
  }
}
