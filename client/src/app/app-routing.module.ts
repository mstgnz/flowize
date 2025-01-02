import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppGuard } from './guards/app.guard';
import { LoginComponent } from './modules/lobby/login.component';
import { NotfoundComponent } from './modules/lobby/notfound.component';
import { NewPasswordComponent } from './modules/lobby/new-password.component';
import { ForgotPasswordComponent } from './modules/lobby/forgot-password.component';

const routes: Routes = [
  { path: 'admin', loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule), canActivate: [AppGuard] },
  { path: 'facility', loadChildren: () => import('./modules/facility/facility.module').then(m => m.FacilityModule), canActivate: [AppGuard] },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'new-password', component: NewPasswordComponent },
  { path: 'notfound', component: NotfoundComponent },
  { path: '', component: LoginComponent },
  { path: '**', redirectTo: '/notfound' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
