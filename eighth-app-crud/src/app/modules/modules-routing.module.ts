import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HERO_ROUTES } from "../core/routes/hero.routes";
import { BASE_ROUTES } from "../core/routes/base.routes";
import { HEROES_ROUTES } from "../core/routes/heroes.routes";


const routes: Routes = [
  ...BASE_ROUTES,
  ...HERO_ROUTES,
  ...HEROES_ROUTES
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulesRoutingModule { }
