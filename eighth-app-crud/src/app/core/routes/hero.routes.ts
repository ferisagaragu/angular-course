export const HERO_ROUTES: Array<any> = [
  {
    path: 'hero/:id',
    loadChildren: () => import('../../modules/hero/hero.module').then(m => m.HeroModule)
  }
];
