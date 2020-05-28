import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtistSearchRoutingModule } from './artist-search-routing.module';
import { CardSearchComponent } from './card-search/card-search.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [CardSearchComponent],
  imports: [
    CommonModule,
    ArtistSearchRoutingModule,
    SharedModule
  ]
})
export class ArtistSearchModule { }
