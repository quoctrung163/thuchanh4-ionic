import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../../model/user-data.service';
@Component({
  selector: 'app-detailuser',
  templateUrl: './detailuser.page.html',
  styleUrls: ['./detailuser.page.scss'],
})
export class DetailuserPage implements OnInit {
  email: string;
  constructor(public userDataService: UserDataService) { }

  ngOnInit() {
    this.userDataService.initialState('data');
  }

}
