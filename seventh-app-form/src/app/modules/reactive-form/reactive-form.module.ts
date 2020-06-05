import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormRoutingModule } from './reactive-form-routing.module';
import { DashboarFormComponent } from './dashboar-form/dashboar-form.component';


@NgModule({
  declarations: [DashboarFormComponent],
  imports: [
    CommonModule,
    ReactiveFormRoutingModule
  ]
})
export class ReactiveFormModule { }
