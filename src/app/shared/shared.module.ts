import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColumnOneComponent } from './layouts/column-one/column-one.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ColumnOneComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ColumnOneComponent
  ]
})
export class SharedModule { }
