import { Injectable } from '@angular/core';
import { UserDataService } from '../model/user-data.service';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  constructor() { }
  static checkLogin(email: string, password: string): boolean {
    // return UserDataService.setAccount().checkLogin(email, password);
    // return UserDataService.setDetailAccount().checkLogin(email, password);
    return UserDataService.checkLogin(email, password);
  }
}
