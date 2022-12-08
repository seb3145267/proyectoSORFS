import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavModule } from './nav/nav.module';
import { OpcionesRegistroModule } from './opciones-registro/opciones-registro.module';
import { RegistrosModule } from './registros/registros.module';
import { UseregModule } from './usereg/usereg.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UseregModule,
    NavModule,
    OpcionesRegistroModule,
    RegistrosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
