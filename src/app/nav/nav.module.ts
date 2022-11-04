import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarraComponent } from './barra/barra.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    BarraComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
    
  ],
  exports: [
    BarraComponent
  ]
})
export class NavModule { }
