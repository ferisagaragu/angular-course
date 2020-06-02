export const PROTECTED_ROUTES: Array<any> = [
  {
    path: 'protected',
    loadChildren: () => import('../../modules/protected/protected.module').then(m => m.ProtectedModule)
  }
];
