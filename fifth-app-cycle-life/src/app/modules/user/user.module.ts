import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { DashboardUserComponent } from './dashboard-user/dashboard-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { NewUserComponent } from './new-user/new-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';


@NgModule({
  declarations: [DashboardUserComponent, EditUserComponent, NewUserComponent, DeleteUserComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
