import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PacienteModel } from '../models/paciente.model';
import { map, delay } from 'rxjs/operators';

interface Person {
  id: string;
  nombrecompleto: string;
  edad: string;
  fechadeconsulta: string;
  genero: string;
  alergias: string;
  motivodeconsulta: string;
  diagnostico: string;
  conductasadictivas: string;
  problemasdesalud: string;
  codigodelmedicamento: string;
  nombredelmedicamento: string;
  dosis: string;
  duraciondelmedicamento: string;
}

@Injectable({
  providedIn: 'root'
})
export class PacientesService {


  private url = 'https://dbfarmacia-f69a7-default-rtdb.firebaseio.com/'; // ACCEDER A LA BASE DE DATOS


  constructor( private http: HttpClient ) { }


  crearPaciente( paciente: PacienteModel ) {

    return this.http.post(`${ this.url }/paciente.json`, paciente)
            .pipe(
              map( (resp: any) => {
                paciente.id = resp.name;
                return paciente;
              })
            );

  }

  actualizarPaciente( paciente: PacienteModel ) {

    const pacienteTemp = {
      ...paciente
    };

 
    return this.http.put(`${ this.url }/paciente/${ paciente.id }.json`, pacienteTemp);


  }

  borrarPaciente( id: string ) {

    return this.http.delete(`${ this.url }/paciente/${ id }.json`);

  }


  getPaciente( id: string ) {

    return this.http.get(`${ this.url }/paciente/${ id }.json`);

  }


  getPacientes() {
    return this.http.get(`${ this.url }/paciente.json`)
            .pipe(
              map( this.crearArreglo ),
              delay(0)
            );
  }



  private crearArreglo( pacientesObj: any ) {

    const pacientes: PacienteModel[] = [];

    Object.keys( pacientesObj ).forEach( key => {

      const paciente: PacienteModel = pacientesObj[key];
      paciente.id = key;

      pacientes.push( paciente );
    });


    return pacientes;

  }


}
