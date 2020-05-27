export const ARTIST_SEARCH_ROUTES: Array<any> = [
  {
    path: 'artist-search',
    loadChildren: () => import('../../modules/artist-search/artist-search.module').then(m => m.ArtistSearchModule)
  }
];
