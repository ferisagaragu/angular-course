import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './modules/home/home.component';
import { HeroesComponent } from './modules/heroes/heroes.component';
import { AboutComponent } from './modules/about/about.component';
import { APP_ROUTING } from './core/routes/app.routes';
import { HeroesService } from './core/http/heroes.service';
import { HeroInformationComponent } from './modules/hero-information/hero-information.component';
import { CardHeroComponent } from './modules/card-hero/card-hero.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    HeroesComponent,
    AboutComponent,
    HeroInformationComponent,
    CardHeroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTING
  ],
  providers: [
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
