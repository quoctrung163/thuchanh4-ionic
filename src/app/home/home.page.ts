import { Component } from '@angular/core';

import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private storage: Storage) {
    // set a key/value
    this.storage.set('name', 'trung');

    //
    this.storage.get('name').then((val) => {
      console.log(val);
    });
  }

}
