import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExampleRoutingModule } from './example-routing.module';
import { ExampleViewComponent } from './example-view/example-view.component';
import { SharedModule } from "../../shared/shared.module";
import { NgStyleComponent } from "./ng-style/ng-style.component";
import { NgClassComponent } from "./ng-class/ng-class.component";
import { AsynchronousButtonComponent } from "./asynchronous-button/asynchronous-button.component";
import { DirectiveComponent } from "./directive/directive.component";
import { NgSwitchComponent } from "./ng-switch/ng-switch.component";


@NgModule({
  declarations: [
    ExampleViewComponent,
    NgStyleComponent,
    NgClassComponent,
    AsynchronousButtonComponent,
    DirectiveComponent,
    NgSwitchComponent
  ],
  imports: [
    CommonModule,
    ExampleRoutingModule,
    SharedModule
  ]
})
export class ExampleModule { }
