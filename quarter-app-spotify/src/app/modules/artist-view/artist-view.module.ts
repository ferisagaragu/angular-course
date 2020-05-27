import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtistViewRoutingModule } from './artist-view-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CardViewComponent } from './card-view/card-view.component';


@NgModule({
  declarations: [CardViewComponent],
  imports: [
    CommonModule,
    ArtistViewRoutingModule
  ]
})
export class ArtistViewModule { }
