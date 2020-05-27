export const ARTIST_VIEW_ROUTES: Array<any> = [
  {
    path: 'artist-view',
    loadChildren: () => import('../../modules/artist-view/artist-view.module').then(m => m.ArtistViewModule)
  }
];
