import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRoleComponent } from './admin/add-role/add-role.component';
import { ListRoleComponent } from './admin/list-role/list-role.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [{path:'login',component:LoginComponent},
{path:'signup',component:SignupComponent},
{path:"",component:LoginComponent},
{path:"AddRole",component:AddRoleComponent},
{path:"listrole",component:ListRoleComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
