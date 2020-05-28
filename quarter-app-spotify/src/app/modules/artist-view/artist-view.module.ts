import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtistViewRoutingModule } from './artist-view-routing.module';
import { CardViewComponent } from './card-view/card-view.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [CardViewComponent],
  imports: [
    CommonModule,
    ArtistViewRoutingModule,
    SharedModule
  ]
})
export class ArtistViewModule { }
