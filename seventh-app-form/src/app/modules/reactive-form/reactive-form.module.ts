import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormRoutingModule } from './reactive-form-routing.module';
import { DashboarFormComponent } from './dashboar-form/dashboar-form.component';
import { ReactiveFormsModule } from "@angular/forms";


@NgModule({
  declarations: [DashboarFormComponent],
  imports: [
    CommonModule,
    ReactiveFormRoutingModule,
    ReactiveFormsModule
  ]
})
export class ReactiveFormModule { }
