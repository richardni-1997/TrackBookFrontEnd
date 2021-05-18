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
<<<<<<< HEAD
import { MatMenuModule } from '@angular/material/menu'
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// import { GoalchartComponent } from './goalchart/goalchart.component';
=======
import { MatMenuModule } from '@angular/material/menu';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { GoalchartComponent } from './goalchart/goalchart.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';

<<<<<<< HEAD
//import { MatTableModule } from '@angular/material/table';
//import { HttpClientModule } from '@angular/common/http';
=======
=======
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
<<<<<<< HEAD
import { FormsModule } from '@angular/forms';

=======
>>>>>>> 40f9c88796efd95c1d6cac9628a7f29d088e37eb
>>>>>>> db92058f54b6d05ec40228847d57b4762a0891ff
>>>>>>> e5c8ff90c059f0039fbda4eab50f13492f4d4e1f
>>>>>>> aff5fe5ec3dfff3496a7f6b6c94de49c8aea56d5

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
<<<<<<< HEAD
    // GoalchartComponent
=======
    
    GoalchartComponent

>>>>>>> aff5fe5ec3dfff3496a7f6b6c94de49c8aea56d5
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
    NgxChartsModule
<<<<<<< HEAD
    
    
    
   
=======
=======
    MatMenuModule,
    MatButtonModule,
<<<<<<< HEAD
    SharedModule,
    AuthModule,
    FormsModule,
    HttpClientModule
=======
    MatTableModule,
<<<<<<< HEAD
    HttpClientModule,
    FormsModule,
    MatFormFieldModule
=======
    HttpClientModule
>>>>>>> 40f9c88796efd95c1d6cac9628a7f29d088e37eb
>>>>>>> db92058f54b6d05ec40228847d57b4762a0891ff
>>>>>>> e5c8ff90c059f0039fbda4eab50f13492f4d4e1f
>>>>>>> aff5fe5ec3dfff3496a7f6b6c94de49c8aea56d5
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
