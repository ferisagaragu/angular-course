export const HOME_ROUTES: Array<any> = [
  {
    path: 'home',
    loadChildren: () => import('../../modules/home/home.module').then(m => m.HomeModule)
  }
];
