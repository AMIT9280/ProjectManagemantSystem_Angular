import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRoleComponent } from './admin/add-role/add-role.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { EditRoleComponent } from './admin/edit-role/edit-role.component';
import { ListRoleComponent } from './admin/list-role/list-role.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { VendorDashboardComponent } from './vendor/vendor-dashboard/vendor-dashboard.component';
import { ListUserComponent } from './admin/list-user/list-user.component';
import { EditUserComponent } from './admin/edit-user/edit-user.component';
import { AddUserComponent } from './admin/add-user/add-user.component';
import { AdminlayoutComponent } from './admin/adminlayout/adminlayout.component';
import { AddProjectComponent } from './admin/add-project/add-project.component';
import { ListProjectComponent } from './admin/list-project/list-project.component';
import { EditProjectComponent } from './admin/edit-project/edit-project.component';
import { AddProjectTeamComponent } from './admin/add-project-team/add-project-team.component';
import { ListProjectTeamComponent } from './admin/list-project-team/list-project-team.component';
import { EditProjectTeamComponent } from './admin/edit-project-team/edit-project-team.component';
import { ForgetpasswordComponent } from './admin/forgetpassword/forgetpassword.component';

const routes: Routes = [

//login-signup
{path:"login",component:LoginComponent},
{path:"signup",component:SignupComponent},
{path:"",component:LoginComponent},
//forgotpass
{path:"forgotpassword",component:ForgetpasswordComponent},
//Role
{path:"AddRole",component:AddRoleComponent},
{path:"listrole",component:ListRoleComponent},
{path:"editrole/:roleId",component:EditRoleComponent},
//user
{path:"AddUser",component:AddUserComponent},
{path:"lisUser",component:ListUserComponent},
{path:"edituser/:userId",component:EditUserComponent},
{path:"admin-dashboard",component:AdminDashboardComponent},
{path:"vendor-dashboard",component:VendorDashboardComponent},
//project
{path:"AddProject",component:AddProjectComponent},
{path:"listproject",component:ListProjectComponent},
{path:"editproject/:projectId",component:EditProjectComponent},
//project-Team
{path:"AddProjectTeam",component:AddProjectTeamComponent},
{path:"listProjectTeam",component:ListProjectTeamComponent},
{path:"editprojectTeam/:projectTeamId",component:EditProjectTeamComponent},
//admin
{path:"admin",component:AdminlayoutComponent,children:[{path:"adminDashboard",component:AdminDashboardComponent}]},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
