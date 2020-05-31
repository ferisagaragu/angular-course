import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtistDetailRoutingModule } from './artist-detail-routing.module';
import { TableSongsComponent } from './table-songs/table-songs.component';
import {SharedModule} from "../../shared/shared.module";


@NgModule({
  declarations: [TableSongsComponent],
  imports: [
    CommonModule,
    ArtistDetailRoutingModule,
    SharedModule
  ]
})
export class ArtistDetailModule { }
