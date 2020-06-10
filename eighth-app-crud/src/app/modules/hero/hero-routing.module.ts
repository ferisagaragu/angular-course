import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardHeroComponent } from "./dashboard-hero/dashboard-hero.component";


const routes: Routes = [
  {
    path: '',
    component: DashboardHeroComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroRoutingModule { }
