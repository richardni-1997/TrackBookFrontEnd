import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoalComponent } from './goal/goal.component';
import { PaymentinfoComponent } from './paymentinfo/paymentinfo.component';
import { LoginComponent } from './home/login/login.component';
import { HomeComponent } from './home/home.component';
import { AddgoalComponent } from './goal/addgoal/addgoal.component';
import { AddpayinfoComponent } from './paymentinfo/addpayinfo/addpayinfo.component';
import { NewuserComponent } from './home/newuser/newuser.component';
import { EditGoalComponent } from './goal/edit-goal/edit-goal.component';
import { EditpayinfoComponent } from './paymentinfo/editpayinfo/editpayinfo.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputerrorComponent } from './error/inputerror/inputerror.component';
import { GoalchartComponent } from './goalchart/goalchart.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';


import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    GoalComponent,
    PaymentinfoComponent,
    LoginComponent,
    HomeComponent,
    AddgoalComponent,
    AddpayinfoComponent,
    NewuserComponent,
    EditGoalComponent,
    EditpayinfoComponent,
    InputerrorComponent,
    GoalchartComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxChartsModule,
    MatMenuModule,
    MatButtonModule,
    MatTableModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
