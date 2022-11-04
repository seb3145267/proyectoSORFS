import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogregComponent } from './logreg/logreg.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    LogregComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    LogregComponent
  ]
})
export class UseregModule { }
