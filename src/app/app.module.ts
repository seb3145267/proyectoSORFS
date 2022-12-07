import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavModule } from './nav/nav.module';
import { UseregModule } from './usereg/usereg.module';
//import { RegPacienteComponent } from './reg/reg-paciente/reg-paciente.component';
//import { RegMedicamentoComponent } from './reg/reg-medicamento/reg-medicamento.component';
import { OpcionesModule } from './opciones/opciones.module';
import { RegModule } from './reg/reg.module';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [
    AppComponent
    /* ,
     RegPacienteComponent,
     RegMedicamentoComponent*/
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavModule,
    UseregModule,
    OpcionesModule,
    RegModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
