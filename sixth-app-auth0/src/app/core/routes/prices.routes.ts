export const PRICES_ROUTES: Array<any> = [
  {
    path: 'prices',
    loadChildren: () => import('../../modules/prices/prices.module').then(m => m.PricesModule)
  }
];
