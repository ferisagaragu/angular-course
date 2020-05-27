import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtistSearchRoutingModule } from './artist-search-routing.module';
import { CardSearchComponent } from './card-search/card-search.component';


@NgModule({
  declarations: [CardSearchComponent],
  imports: [
    CommonModule,
    ArtistSearchRoutingModule
  ]
})
export class ArtistSearchModule { }
