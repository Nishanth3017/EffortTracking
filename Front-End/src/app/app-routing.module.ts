import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MsComponent } from './ms/ms.component';
import { DsComponent } from './ds/ds.component';
import { UiComponent } from './ui/ui.component';
import { ClickComponent } from './click/click.component';
import { StreamComponent } from './stream/stream.component';
import { RegisterComponent } from './register/register.component';

import { JeeComponent } from './stream/jee/jee.component';
import { EmployeeComponent } from './employee/employee.component';
import { ReviewerComponent } from './reviewer/reviewer.component';
import { ManagerComponent } from './manager/manager.component';
import { MjeeComponent } from './manager/mjee/mjee.component';
import { MmsComponent } from './manager/mms/mms.component';
import { MdsComponent } from './manager/mds/mds.component';
import { MuiComponent } from './manager/mui/mui.component';
import { RjeeComponent } from './reviewer/rjee/rjee.component';
import { RmsComponent } from './reviewer/rms/rms.component';
import { RdsComponent } from './reviewer/rds/rds.component';
import { RuiComponent } from './reviewer/rui/rui.component';
import { MstreamComponent } from './manager/mstream/mstream.component';
import { RstreamComponent } from './reviewer/rstream/rstream.component';

import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path:'home', component:HomeComponent, children:[
    { path:'login', component:LoginComponent},
    { path:'register', component:RegisterComponent }]},
    
{path:'register',component:RegisterComponent},
{path:'stream',component:StreamComponent},
{path:"jee" ,component:JeeComponent} ,
{path:"ms" ,component:MsComponent},
{path:"ds" ,component:DsComponent},
{path:"ui" ,component:UiComponent},
{path:"click", component:ClickComponent},

{path:"employee",component:EmployeeComponent},
{path:"manager",component:ManagerComponent},
{path:"reviewer",component:ReviewerComponent},
{path:"mjee",component:MjeeComponent},
{path:"mms",component:MmsComponent},
{path:"mds",component:MdsComponent},
{path:"mui",component:MuiComponent},
{path:"rjee",component:RjeeComponent},
{path:"rms",component:RmsComponent},
{path:"rds",component:RdsComponent},
{path:"rui",component:RuiComponent},
{path:"mstream",component:MstreamComponent},
{path:"rstream",component:RstreamComponent},
{path:"rjee",component:RjeeComponent},
{path:"rms",component:RmsComponent},
{path:"rds",component:RdsComponent},
{path:"rui",component:RuiComponent},

{path:"app",component:AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
