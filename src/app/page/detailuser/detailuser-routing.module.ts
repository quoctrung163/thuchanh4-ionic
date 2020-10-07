import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailuserPage } from './detailuser.page';

const routes: Routes = [
  {
    path: '',
    component: DetailuserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailuserPageRoutingModule {}
