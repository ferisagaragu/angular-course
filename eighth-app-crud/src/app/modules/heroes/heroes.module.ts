import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { DashboardHeroesComponent } from './dashboard-heroes/dashboard-heroes.component';


@NgModule({
  declarations: [DashboardHeroesComponent],
  imports: [
    CommonModule,
    HeroesRoutingModule
  ]
})
export class HeroesModule { }
