import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpcRegistroComponent } from './opc-registro/opc-registro.component';
import { OpcBusquedaComponent } from './opc-busqueda/opc-busqueda.component';



@NgModule({
  declarations: [
    OpcRegistroComponent,
    OpcBusquedaComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    OpcRegistroComponent,
    OpcBusquedaComponent
  ]
})
export class OpcionesModule { }
