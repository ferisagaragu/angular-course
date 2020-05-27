import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { providerLanguage } from './core/config/app.config';
import { CapitalizePipe } from './core/pipes/capitalize.pipe';
import { SecurityDomPipe } from './core/pipes/security-dom.pipe';
import { PasswordPipe } from './core/pipes/password.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CapitalizePipe,
    SecurityDomPipe,
    PasswordPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ...providerLanguage
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
