import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HeroeModel } from '../models/heroe.model';
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
export class HeroesService {


  private url = 'https://dbfarmacia-f69a7-default-rtdb.firebaseio.com/'; // ACCEDER A LA BASE DE DATOS


  constructor( private http: HttpClient ) { }


  crearHeroe( heroe: HeroeModel ) {

    return this.http.post(`${ this.url }/heroes.json`, heroe)
            .pipe(
              map( (resp: any) => {
                heroe.id = resp.name;
                return heroe;
              })
            );

  }

  actualizarHeroe( heroe: HeroeModel ) {

    const heroeTemp = {
      ...heroe
    };

 
    return this.http.put(`${ this.url }/heroes/${ heroe.id }.json`, heroeTemp);


  }

  borrarHeroe( id: string ) {

    return this.http.delete(`${ this.url }/heroes/${ id }.json`);

  }


  getHeroe( id: string ) {

    return this.http.get(`${ this.url }/heroes/${ id }.json`);

  }


  getHeroes() {
    return this.http.get(`${ this.url }/heroes.json`)
            .pipe(
              map( this.crearArreglo ),
              delay(0)
            );
  }



  private crearArreglo( heroesObj: any ) {

    const heroes: HeroeModel[] = [];

    Object.keys( heroesObj ).forEach( key => {

      const heroe: HeroeModel = heroesObj[key];
      heroe.id = key;

      heroes.push( heroe );
    });


    return heroes;

  }


}
