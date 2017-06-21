import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { NgModule } from '@angular/core';
import { HTTPService } from './http.service';
import { EmployeesService } from './models/employee.service';
import { SalesService } from './models/sales.service';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { EmployeeSummaryComponent } from './employee-summary/employee-summary.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { AddSaleComponent } from './add-sale/add-sale.component';
import { EditSaleComponent } from './edit-sale/edit-sale.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { EditFormComponent } from './edit-form/edit-form.component';
import { AddFormComponent } from './add-form/add-form.component';
import { CommissionsComponent } from './commissions/commissions.component';



@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LoginComponent,
    HeaderComponent,
    EmployeeSummaryComponent,
    AddEmployeeComponent,
    AddSaleComponent,
    EditSaleComponent,
    EditEmployeeComponent,
    EditFormComponent,
    AddFormComponent,
    CommissionsComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers:[HTTPService,SalesService,EmployeesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
