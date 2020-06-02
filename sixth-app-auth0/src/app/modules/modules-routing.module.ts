import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HOME_ROUTES } from "../core/routes/home.routes";
import { BASE_ROUTES } from "../core/routes/base.routes";
import { PRICES_ROUTES } from "../core/routes/prices.routes";
import { PROTECTED_ROUTES } from "../core/routes/protected.routes";


const routes: Routes = [
  ...BASE_ROUTES,
  ...HOME_ROUTES,
  ...PRICES_ROUTES,
  ...PROTECTED_ROUTES
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulesRoutingModule { }
