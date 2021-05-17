import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddgoalComponent } from './goal/addgoal/addgoal.component';
import { EditGoalComponent } from './goal/edit-goal/edit-goal.component';
import { GoalComponent } from './goal/goal.component';
import { GoalchartComponent } from './goalchart/goalchart.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './home/login/login.component';
import { NewuserComponent } from './home/newuser/newuser.component';
import { AddpayinfoComponent } from './paymentinfo/addpayinfo/addpayinfo.component';
import { EditpayinfoComponent } from './paymentinfo/editpayinfo/editpayinfo.component';
import { PaymentinfoComponent } from './paymentinfo/paymentinfo.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'goalsChart', component: GoalchartComponent},
  {path: 'goals', component: GoalComponent},
  {path: 'goals/newgoal', component: AddgoalComponent},
  {path: 'goals/edit/:id', component: EditGoalComponent},
  {path: 'paymentinfo', component: PaymentinfoComponent},
  {path: 'paymentinfo/newpayinfo', component: AddpayinfoComponent},
  {path: 'paymentinfo/edit/:id', component: EditpayinfoComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: NewuserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
