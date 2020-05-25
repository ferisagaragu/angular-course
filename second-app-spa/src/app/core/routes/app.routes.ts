import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/modules/home/home.component';
import { AboutComponent } from 'src/app/modules/about/about.component';
import { HeroesComponent } from 'src/app/modules/heroes/heroes.component';
import { HeroInformationComponent } from 'src/app/modules/hero-information/hero-information.component';


const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'hero-information/:id', component: HeroInformationComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);