import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MsComponent } from './ms/ms.component';
import { DsComponent } from './ds/ds.component';
import { UiComponent } from './ui/ui.component';
import { ClickComponent } from './click/click.component';
import { StreamComponent } from './stream/stream.component';

// import { JeeComponent } from './jee/jee.component';
import { RegisterComponent } from './register/register.component';

import { AppService } from './app.service';
import { JeeComponent } from './stream/jee/jee.component';
import { EmployeeComponent } from './employee/employee.component';
import { ManagerComponent } from './manager/manager.component';
import { ReviewerComponent } from './reviewer/reviewer.component';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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

import { RegService } from './register/reg.service';
import { EmployeeService } from './employee/employee.service';


import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';









// import { StreamServiceService } from './stream/stream-service.service';




@NgModule({
  declarations: [
    AppComponent,
    MsComponent,
    DsComponent,
    UiComponent,
    ClickComponent,
    StreamComponent,
    JeeComponent,
    RegisterComponent,
    EmployeeComponent,
    ManagerComponent,
    ReviewerComponent,
    MjeeComponent,
    MmsComponent,
    MdsComponent,
    MuiComponent,
    RjeeComponent,
    RmsComponent,
    RdsComponent,
    RuiComponent,
    MstreamComponent,
    RstreamComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [AppService ,RegService,EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule {
 
}
