import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegPacienteComponent } from './reg-paciente/reg-paciente.component';
import { RegMedicamentoComponent } from './reg-medicamento/reg-medicamento.component';



@NgModule({
  declarations: [
    RegPacienteComponent,
    RegMedicamentoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RegPacienteComponent,
    RegMedicamentoComponent
  ]
})
export class RegModule { }
