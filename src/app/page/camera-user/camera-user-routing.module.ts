import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CameraUserPage } from './camera-user.page';

const routes: Routes = [
  {
    path: '',
    component: CameraUserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CameraUserPageRoutingModule {}
