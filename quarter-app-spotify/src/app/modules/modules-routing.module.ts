import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ARTIST_VIEW_ROUTES } from '../core/routes/artist-view.routes';
import { BASE_ROUTES } from '../core/routes/base.routes';
import { ARTIST_SEARCH_ROUTES } from '../core/routes/artist-search.routes';

const routes: Routes = [
  {
    path: '',
    children: [
      ...BASE_ROUTES,
      ...ARTIST_VIEW_ROUTES,
      ...ARTIST_SEARCH_ROUTES
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulesRoutingModule { }
