import { NgModule } from '@angular/core';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CompanyListComponent } from './companies/company-list.component';
import { CompanyFormComponent } from './companies/company-form.component';
import { FacilityFormComponent } from './facility/facility-form.component';
import { CompanyDetailComponent } from './companies/company-detail.component';

@NgModule({
  declarations: [
    DashboardComponent,
    CompanyListComponent,
    CompanyFormComponent,
    FacilityFormComponent,
    CompanyDetailComponent
  ],
  imports: [
    AdminRoutingModule,
  ],
  exports: []
})
export class AdminModule { }