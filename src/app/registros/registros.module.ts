import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroPacienteComponent } from './registro-paciente/registro-paciente.component';
import { RegistroMedicamentoComponent } from './registro-medicamento/registro-medicamento.component';



@NgModule({
  declarations: [
    RegistroPacienteComponent,
    RegistroMedicamentoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RegistroPacienteComponent,
    RegistroMedicamentoComponent
  ]
})
export class RegistrosModule { }
