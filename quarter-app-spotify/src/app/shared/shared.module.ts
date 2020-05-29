import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadComponent } from './load/load.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { ImagePipe } from "../core/pipes/image.pipe";


@NgModule({
  declarations: [LoadComponent, NavbarComponent, ImagePipe],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    CommonModule,
    RouterModule,
    LoadComponent,
    NavbarComponent,
    ImagePipe
  ]
})
export class SharedModule { }
