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
  { path: 'scan-qr', loadChildren: './pages/inspector/scan-qr/scan-qr.module#ScanQrPageModule' },
  { path: 'request-token', loadChildren: './pages/user/request-token/request-token.module#RequestTokenPageModule' },
  { path: 'account', loadChildren: './pages/user/account/account.module#AccountPageModule' },
  { path: 'add-credit', loadChildren: './pages/user/add-credit/add-credit.module#AddCreditPageModule' },
  { path: 'overview', loadChildren: './pages/manager/overview/overview.module#OverviewPageModule' },
  { path: 'time-tables', loadChildren: './pages/manager/time-tables/time-tables.module#TimeTablesPageModule' },
  { path: 'reports', loadChildren: './pages/manager/reports/reports.module#ReportsPageModule' },
  { path: 'view-inspectors', loadChildren: './pages/manager/view-inspectors/view-inspectors.module#ViewInspectorsPageModule' },
  { path: 'view-users', loadChildren: './pages/manager/view-users/view-users.module#ViewUsersPageModule' },
  { path: 'manual-ticket', loadChildren: './pages/inspector/manual-ticket/manual-ticket.module#ManualTicketPageModule' },
  { path: 'view-ticket', loadChildren: './pages/inspector/view-ticket/view-ticket.module#ViewTicketPageModule' },
  { path: 'paymnet', loadChildren: './pages/user/paymnet/paymnet.module#PaymnetPageModule' },
  { path: 'trips', loadChildren: './pages/user/trips/trips.module#TripsPageModule' }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
