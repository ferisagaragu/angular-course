import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { FormsModule } from "@angular/forms";


@NgModule({
  declarations: [DashboardHomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule
  ]
})
export class HomeModule { }
