import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDataService } from '../../model/user-data.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  name: string; email: string; password: string; amount: string;
  constructor(public userDataService: UserDataService, private router: Router) {

  }

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
    console.log(uniqueArray);
    uniqueArray.map(item => {
      this.email = item.email;
      this.name = item.userName;
      this.password = item.password;
      this.amount = item.amount.toString();
    });
    // this.userDataService.newListAccount.filter(item => {
    //   // this.name = item.userName;
    //   // this.email = history.state.email;
    //   // this.password = history.state.password;
    //   // this.amount = item.amount.toString();
    //   const result = (item.email === history.state.email);
    //   console.log(result);
    //   return result;
    // });
  }

  detail() {

  }

  detailAll() {
    this.router.navigateByUrl('/detailuser');
  }

  logOut() {
    this.router.navigateByUrl('/');
  }

}
