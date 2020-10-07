import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowAllUserPageRoutingModule } from './show-all-user-routing.module';

import { ShowAllUserPage } from './show-all-user.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowAllUserPageRoutingModule
  ],
  declarations: [ShowAllUserPage]
})
export class ShowAllUserPageModule {}
