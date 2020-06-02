import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardPricesComponent } from "./dashboard-prices/dashboard-prices.component";


const routes: Routes = [
  {
    path: '',
    component: DashboardPricesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PricesRoutingModule { }
