import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotfoundComponent } from '../lobby/notfound.component';
import { PermissionGuard } from '../../guards/permission.guard';
import { CompanyListComponent } from './companies/company-list.component';
import { CompanyFormComponent } from './companies/company-form.component';
import { CompanyDetailComponent } from './companies/company-detail.component';

const routes: Routes = [
  {
    path: '', children: [
      {
        path: '', data: { breadcrumb: 'Anasayfa', name: 'DashboardComponent' },
        component: DashboardComponent, pathMatch: 'full'
      },
      {
        path: 'companies', data: { breadcrumb: 'Şirketler' }, children: [
          {
            path: '', data: { breadcrumb: 'Liste', name: 'CompanyListComponent' },
            component: CompanyListComponent/* , canActivate: [PermissionGuard] */
          },
          {
            path: 'add', data: { breadcrumb: 'Form', name: 'CompanyFormComponent' },
            component: CompanyFormComponent/* , canActivate: [PermissionGuard] */
          },
          {
            path: 'detail/:id', data: { breadcrumb: 'Detay', name: 'CompanyDetailComponent' },
            component: CompanyDetailComponent/* , canActivate: [PermissionGuard] */
          }
        ]
      },
    ]
  },
  { path: 'notfound', component: NotfoundComponent },
  { path: '**', redirectTo: '/notfound' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }