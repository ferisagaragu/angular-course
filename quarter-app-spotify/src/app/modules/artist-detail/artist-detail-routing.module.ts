import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TableSongsComponent} from "./table-songs/table-songs.component";


const routes: Routes = [
  {
    path: '',
    component: TableSongsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArtistDetailRoutingModule { }
