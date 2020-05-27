import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardSearchComponent } from './card-search/card-search.component';


const routes: Routes = [
  {
    path:'',
    component: CardSearchComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArtistSearchRoutingModule { }
