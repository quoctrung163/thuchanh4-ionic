import { Component, OnInit } from '@angular/core';
import { UserDataService } from 'src/app/model/user-data.service';

@Component({
  selector: 'app-show-all-user',
  templateUrl: './show-all-user.page.html',
  styleUrls: ['./show-all-user.page.scss'],
})
export class ShowAllUserPage implements OnInit {

  constructor(public userDataService: UserDataService) { }

  ngOnInit() {
    this.userDataService.initialState('data');
  }

}
