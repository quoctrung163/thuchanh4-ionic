import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../../model/user-data.service';
@Component({
  selector: 'app-detailuser',
  templateUrl: './detailuser.page.html',
  styleUrls: ['./detailuser.page.scss'],
})
export class DetailuserPage implements OnInit {
  name: string; email: string; password: string; amount: string;
  constructor(public userDataService: UserDataService) { }

  ngOnInit() {
    this.userDataService.initialState('data');
    const findEmail = this.userDataService.newListAccount.filter(item => {
      return item.email === history.state.email;
    });

    const uniqueArray = findEmail.filter((thing, index) => {
      const emailStringify = JSON.stringify(thing);
      return index === findEmail.findIndex(obj => {
        return JSON.stringify(obj) === emailStringify;
      });
    });

    uniqueArray.map(item => {
      this.email = item.email;
      this.name = item.userName;
      this.password = item.password;
      this.amount = item.amount.toString();
    });
  }
}
