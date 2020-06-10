export const HEROES_ROUTES: Array<any> = [
  {
    path: 'heroes',
    loadChildren: () => import('../../modules/heroes/heroes.module').then(m => m.HeroesModule)
  }
];
