import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, delay } from 'rxjs/operators';
import { MedicamentoModel } from '../models/medicamento.model';

interface Person {
  id: string;
  codigo: string;
  nombremedicamento: string;
  presentacion: string;
  precio: string;
}

@Injectable({
  providedIn: 'root'
})
export class MedicamentosService {


  private url = 'https://dbfarmacia-f69a7-default-rtdb.firebaseio.com/'; // ACCEDER A LA BASE DE DATOS


  constructor( private http: HttpClient ) { }


  crearMedicamento( medicamento: MedicamentoModel ) {

    return this.http.post(`${ this.url }/medicamento.json`, medicamento)
            .pipe(
              map( (resp: any) => {
                medicamento.id = resp.name;
                return medicamento;
              })
            );

  }

  actualizarMedicamento( medicamento: MedicamentoModel ) {

    const medicamentoTemp = {
      ...medicamento
    };

 
    return this.http.put(`${ this.url }/medicamento/${ medicamento.id }.json`, medicamentoTemp);


  }

  borrarMedicamento( id: string ) {

    return this.http.delete(`${ this.url }/medicamento/${ id }.json`);

  }


  getMedicamento( id: string ) {

    return this.http.get(`${ this.url }/medicamento/${ id }.json`);

  }


  getMedicamentos() {
    return this.http.get(`${ this.url }/medicamento.json`)
            .pipe(
              map( this.crearArreglo ),
              delay(0)
            );
  }



  private crearArreglo( medicamentosObj: any ) {

    const medicamentos: MedicamentoModel[] = [];

    Object.keys( medicamentosObj ).forEach( key => {

      const medicamento: MedicamentoModel = medicamentosObj[key];
      medicamento.id = key;

      medicamentos.push( medicamento );
    });


    return medicamentos;

  }


}
