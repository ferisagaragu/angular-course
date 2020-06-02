import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PricesRoutingModule } from './prices-routing.module';
import { DashboardPricesComponent } from './dashboard-prices/dashboard-prices.component';


@NgModule({
  declarations: [DashboardPricesComponent],
  imports: [
    CommonModule,
    PricesRoutingModule
  ]
})
export class PricesModule { }
