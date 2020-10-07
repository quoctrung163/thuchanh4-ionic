import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailuserPageRoutingModule } from './detailuser-routing.module';

import { DetailuserPage } from './detailuser.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailuserPageRoutingModule
  ],
  declarations: [DetailuserPage]
})
export class DetailuserPageModule {}
