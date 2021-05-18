import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';

import { ResetPasswordComponent } from '../home/reset-password/reset-password.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [

    ResetPasswordComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule
  ],
  exports: [
    ResetPasswordComponent
  ]
})
export class AuthModule { }
