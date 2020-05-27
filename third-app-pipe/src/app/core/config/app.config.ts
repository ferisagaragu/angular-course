import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es';
import fr from '@angular/common/locales/fr';

registerLocaleData(es);
registerLocaleData(fr);

export const providerLanguage: any = [
  {
    provide: LOCALE_ID,
    useValue: 'es'
  },{
    provide: LOCALE_ID,
    useValue: 'fr'
  }
]
