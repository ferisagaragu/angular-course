import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtistDetailRoutingModule } from './artist-detail-routing.module';
import { TableSongsComponent } from './table-songs/table-songs.component';


@NgModule({
  declarations: [TableSongsComponent],
  imports: [
    CommonModule,
    ArtistDetailRoutingModule
  ]
})
export class ArtistDetailModule { }
