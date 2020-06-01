import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from "@angular/router";
import { HighlightDirective } from "../core/directives/highlight.directive";


@NgModule({
  declarations: [NavbarComponent, HighlightDirective],
  imports: [
    RouterModule,
    CommonModule
  ],
  exports: [
    RouterModule,
    CommonModule,
    NavbarComponent,
    HighlightDirective
  ]
})
export class SharedModule { }
