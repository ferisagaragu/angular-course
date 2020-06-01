export const USER_ROUTES: Array<any> = [
  {
    path: 'user',
    loadChildren: () => import('../../modules/user/user.module').then(m => m.UserModule)
  }
];
