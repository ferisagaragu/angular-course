export const ARTIST_DETAIL_ROUTES: Array<any> = [
  {
    path: 'artist-detail/:id',
    loadChildren: () => import('../../modules/artist-detail/artist-detail.module').then(m => m.ArtistDetailModule)
  }
];
