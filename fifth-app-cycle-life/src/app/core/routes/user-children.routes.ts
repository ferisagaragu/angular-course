import { EditUserComponent } from "../../modules/user/edit-user/edit-user.component";
import { NewUserComponent } from "../../modules/user/new-user/new-user.component";
import { DeleteUserComponent } from "../../modules/user/delete-user/delete-user.component";

export const USER_CHILDREN_ROUTES: Array<any> = [
  {
    path: 'new/:id',
    component: NewUserComponent
  }, {
    path: 'edit',
    component: EditUserComponent
  }, {
    path: 'delete',
    component: DeleteUserComponent
  },{
    path: '',
    pathMatch: 'full',
    redirectTo: 'new'
  }
];
