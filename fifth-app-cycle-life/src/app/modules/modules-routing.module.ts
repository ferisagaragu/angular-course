import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BASE_ROUTES } from "../core/routes/base.routes";
import { HOME_ROUTES } from "../core/routes/home.routes";
import { USER_ROUTES } from "../core/routes/user.routes";


const routes: Routes = [
  ...BASE_ROUTES,
  ...HOME_ROUTES,
  ...USER_ROUTES
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulesRoutingModule { }
