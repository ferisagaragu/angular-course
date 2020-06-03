import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HOME_ROUTES } from "../core/routes/home.routes";
import { BASE_ROUTES } from "../core/routes/base.routes";


const routes: Routes = [
  ...BASE_ROUTES,
  ...HOME_ROUTES
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulesRoutingModule { }
