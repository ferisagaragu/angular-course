import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProtectedRoutingModule } from './protected-routing.module';
import { DashboardProtectedComponent } from './dashboard-protected/dashboard-protected.component';


@NgModule({
  declarations: [DashboardProtectedComponent],
  imports: [
    CommonModule,
    ProtectedRoutingModule
  ]
})
export class ProtectedModule { }
