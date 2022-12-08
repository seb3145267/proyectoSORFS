import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { OpRegistroComponent } from './op-registro/op-registro.component';
import { RegistrosModule } from '../registros/registros.module';



@NgModule({
  declarations: [
    OpRegistroComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    RegistrosModule
  ],
  exports: [
    OpRegistroComponent
  ]
})
export class OpcionesRegistroModule { }
