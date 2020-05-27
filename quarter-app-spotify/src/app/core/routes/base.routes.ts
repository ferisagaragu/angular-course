export const BASE_ROUTES: Array<any> = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },{
    path: '**',
    pathMatch: 'full',
    redirectTo: 'home'
  }
];
