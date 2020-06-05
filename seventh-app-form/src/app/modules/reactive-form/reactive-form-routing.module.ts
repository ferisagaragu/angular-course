import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboarFormComponent } from "./dashboar-form/dashboar-form.component";


const routes: Routes = [
  {
    path: '',
    component: DashboarFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReactiveFormRoutingModule { }
