import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PacientesComponent } from './pages/pacientes/pacientes.component';
import { PacienteComponent } from './pages/paciente/paciente.component';
import { LogregComponent } from './usereg/logreg/logreg.component';
import { MedicamentosComponent } from './pages/medicamentos/medicamentos.component';
import { MedicamentoComponent } from './pages/medicamento/medicamento.component';
import { ReglogComponent } from './pages/reglog/reglog.component';

const routes: Routes = [
  { path: 'pacientes', component: PacientesComponent },
  { path: 'paciente/:id', component: PacienteComponent },
  { path:'medicamentos', component:MedicamentosComponent },
  { path: 'medicamento/:id', component: MedicamentoComponent },
  { path:'cuenta', component:ReglogComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'pacientes' }
];



@NgModule({
  imports: [
    RouterModule.forRoot( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
