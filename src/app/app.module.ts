import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AddRoleComponent } from './admin/add-role/add-role.component';
import { AdminHeaderComponent } from './admin/admin-header/admin-header.component';
import { ListRoleComponent } from './admin/list-role/list-role.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AddCatagoryComponent } from './admin/add-catagory/add-catagory.component';
import { EditRoleComponent } from './admin/edit-role/edit-role.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { VendorDashboardComponent } from './vendor/vendor-dashboard/vendor-dashboard.component';
import { ListUserComponent } from './admin/list-user/list-user.component';
import { EditUserComponent } from './admin/edit-user/edit-user.component';
import { ListProjectComponent } from './admin/list-project/list-project.component';
import { ListProjectModuleComponent } from './admin/list-project-module/list-project-module.component';
import { ListTaskComponent } from './admin/list-task/list-task.component';
import { ListUserTaskComponent } from './admin/list-user-task/list-user-task.component';
import { EditProjectComponent } from './admin/edit-project/edit-project.component';
import { EditProjectModuleComponent } from './admin/edit-project-module/edit-project-module.component';
import { ListProjectTeamComponent } from './admin/list-project-team/list-project-team.component';
import { ListStatusComponent } from './admin/list-status/list-status.component';
import { EditProjectTeamComponent } from './admin/edit-project-team/edit-project-team.component';
import { EditStatusComponent } from './admin/edit-status/edit-status.component';
import { EditTaskComponent } from './admin/edit-task/edit-task.component';
import { EditUserTaskComponent } from './admin/edit-user-task/edit-user-task.component';
import { AddUserComponent } from './admin/add-user/add-user.component';
import { MiniSidebarComponent } from './admin/mini-sidebar/mini-sidebar.component';
import { RightMenuComponent } from './admin/right-menu/right-menu.component';
import { AdmindashboardComponent } from './admin/admindashboard/admindashboard.component';
import { AdminlayoutComponent } from './admin/adminlayout/adminlayout.component';
import { AddProjectComponent } from './admin/add-project/add-project.component';
import { AddProjectTeamComponent } from './admin/add-project-team/add-project-team.component';
import { ForgetpasswordComponent } from './admin/forgetpassword/forgetpassword.component';
import { ChangepasswordComponent } from './admin/changepassword/changepassword.component';
import { AddStatusComponent } from './admin/add-status/add-status.component';
import { AddProjectModuleComponent } from './admin/add-project-module/add-project-module.component';
import { AddTaskComponent } from './admin/add-task/add-task.component';
import { AddUserTaskComponent } from './admin/add-user-task/add-user-task.component';
 
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    AddRoleComponent,
    AdminHeaderComponent,
    ListRoleComponent,
    AddCatagoryComponent,
    EditRoleComponent,
    AdminDashboardComponent,
    VendorDashboardComponent,
    ListUserComponent,
    EditUserComponent,
    ListProjectComponent,
    ListProjectModuleComponent,
    ListTaskComponent,
    ListUserTaskComponent,
    EditProjectComponent,
    EditProjectModuleComponent,
    ListProjectTeamComponent,
    ListStatusComponent,
    EditProjectTeamComponent,
    EditStatusComponent,
    EditTaskComponent,
    EditUserTaskComponent,
    AddUserComponent,
    MiniSidebarComponent,
    RightMenuComponent,
    AdmindashboardComponent,
    AdminlayoutComponent,
    AddProjectComponent,
    AddProjectTeamComponent,
    ForgetpasswordComponent,
    ChangepasswordComponent,
    AddStatusComponent,
    AddProjectModuleComponent,
    AddTaskComponent,
    AddUserTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
