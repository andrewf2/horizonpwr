import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EmployeeSummaryComponent } from './employee-summary/employee-summary.component';
import { EditFormComponent } from './edit-form/edit-form.component';
import { AddFormComponent } from './add-form/add-form.component';
import { LoginComponent } from './login/login.component';

export const appRoutes: Routes = [
  { path: '', component:  LoginComponent},
  { path: 'employee/:id',      component: EmployeeSummaryComponent },
  {
    path: 'edit/:resource',
    component: EditFormComponent,
  },
  { path: 'add/:resource',
    component: AddFormComponent,
  }
];

