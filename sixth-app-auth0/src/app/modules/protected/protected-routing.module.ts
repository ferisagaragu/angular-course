import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardProtectedComponent } from "./dashboard-protected/dashboard-protected.component";
import { AuthGuard } from "../../core/guards/auth.guard";


const routes: Routes = [
  {
    path: '',
    component: DashboardProtectedComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProtectedRoutingModule { }
