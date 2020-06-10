import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroRoutingModule } from './hero-routing.module';
import { DashboardHeroComponent } from './dashboard-hero/dashboard-hero.component';
import { ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "../../shared/shared.module";


@NgModule({
  declarations: [DashboardHeroComponent],
  imports: [
    CommonModule,
    HeroRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class HeroModule { }
