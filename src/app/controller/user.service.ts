import { Injectable } from '@angular/core';
import { UserDataService } from '../model/user-data.service';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  constructor(public userDataService: UserDataService) { }
  checkLogin(email: string, password: string): boolean {
    console.log('correct or wrong', this.userDataService.checkLogin(email, password));
    return this.userDataService.checkLogin(email, password);
  }
}
