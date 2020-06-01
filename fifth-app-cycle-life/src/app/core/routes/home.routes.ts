export const HOME_ROUTES: Array<any> = [
  {
    path: 'home',
    loadChildren: () => import('../../modules/example/example.module').then(m => m.ExampleModule)
  }
];
