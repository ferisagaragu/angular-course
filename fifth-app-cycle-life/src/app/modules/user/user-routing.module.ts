import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardUserComponent } from "./dashboard-user/dashboard-user.component";
import { USER_CHILDREN_ROUTES } from "../../core/routes/user-children.routes";


const routes: Routes = [
  {
    path: '',
    component: DashboardUserComponent,
    children: USER_CHILDREN_ROUTES
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
