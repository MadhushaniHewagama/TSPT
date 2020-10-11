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
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/user/signup/signup.module').then( m => m.SignupPageModule)
  },  { path: 'user-dashboard', loadChildren: './pages/user/user-dashboard/user-dashboard.module#UserDashboardPageModule' },
  { path: 'manager-dashboard', loadChildren: './pages/manager/manager-dashboard/manager-dashboard.module#ManagerDashboardPageModule' },
  { path: 'inspector-dashboard', loadChildren: './pages/inspector/inspector-dashboard/inspector-dashboard.module#InspectorDashboardPageModule' },
  { path: 'scan-qr', loadChildren: './pages/inspector/scan-qr/scan-qr.module#ScanQrPageModule' }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
