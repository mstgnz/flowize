import { NgModule } from '@angular/core';

import { FlowRoutingModule } from './flow-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    FlowRoutingModule,
  ],
  exports: []
})
export class FlowModule { }