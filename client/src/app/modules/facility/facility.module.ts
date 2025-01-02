import { NgModule } from '@angular/core';

import { FacilityRoutingModule } from './facility-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CompanyFormComponent } from './companies/company-form.component';

@NgModule({
  declarations: [
    DashboardComponent,
    CompanyFormComponent,
  ],
  imports: [
    FacilityRoutingModule,
  ],
  exports: []
})
export class FacilityModule { }