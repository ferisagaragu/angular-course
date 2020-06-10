import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardHeroesComponent } from "./dashboard-heroes/dashboard-heroes.component";


const routes: Routes = [
  {
    path: '',
    component: DashboardHeroesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
