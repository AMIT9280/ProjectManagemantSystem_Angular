import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRoleComponent } from './admin/add-role/add-role.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { EditRoleComponent } from './admin/edit-role/edit-role.component';
import { ListRoleComponent } from './admin/list-role/list-role.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { VendorDashboardComponent } from './vendor/vendor-dashboard/vendor-dashboard.component';


const routes: Routes = [{path:'login',component:LoginComponent},
{path:'signup',component:SignupComponent},
{path:"",component:LoginComponent},
{path:"AddRole",component:AddRoleComponent},
{path:"listrole",component:ListRoleComponent},
{path:"editrole/:roleId",component:EditRoleComponent}

,
{path:"admin-dashboard",component:AdminDashboardComponent},
{path:"vendor-dashboard",component:VendorDashboardComponent}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
