import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowAllUserPage } from './show-all-user.page';

const routes: Routes = [
  {
    path: '',
    component: ShowAllUserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowAllUserPageRoutingModule {}
