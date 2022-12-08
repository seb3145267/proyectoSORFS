import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PacienteComponent } from './pages/paciente/paciente.component';
import { PacientesComponent } from './pages/pacientes/pacientes.component';
import { NavModule } from './nav/nav.module';
import { UseregModule } from './usereg/usereg.module';
import { MedicamentoComponent } from './pages/medicamento/medicamento.component';
import { MedicamentosComponent } from './pages/medicamentos/medicamentos.component';
import { ReglogComponent } from './pages/reglog/reglog.component';

@NgModule({
  declarations: [
    AppComponent,
    PacienteComponent,
    PacientesComponent,
    MedicamentoComponent,
    MedicamentosComponent,
    ReglogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NavModule,
    UseregModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
