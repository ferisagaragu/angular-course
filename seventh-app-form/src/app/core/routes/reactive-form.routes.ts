export const REACTIVE_FORM_ROUTES: Array<any> = [
  {
    path: 'reactive-form',
    loadChildren: () => import('../../modules/reactive-form/reactive-form.module').then(m => m.ReactiveFormModule)
  }
];
