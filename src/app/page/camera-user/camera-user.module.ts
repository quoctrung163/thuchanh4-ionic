import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CameraUserPageRoutingModule } from './camera-user-routing.module';

import { CameraUserPage } from './camera-user.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CameraUserPageRoutingModule
  ],
  declarations: [CameraUserPage]
})
export class CameraUserPageModule {}
