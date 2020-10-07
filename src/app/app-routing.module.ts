import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./page/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./page/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'detailuser',
    loadChildren: () => import('./page/detailuser/detailuser.module').then( m => m.DetailuserPageModule)
  },
  {
    path: 'show-all-user',
    loadChildren: () => import('./page/show-all-user/show-all-user.module').then( m => m.ShowAllUserPageModule)
  },
  {
    path: 'info-user',
    loadChildren: () => import('./page/info-user/info-user.module').then( m => m.InfoUserPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
