import { Component, OnInit } from '@angular/core';
import { PacientesService } from '../../services/pacientes.service';
import { PacienteModel } from '../../models/paciente.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.css']
})


export class PacientesComponent implements OnInit {

  pacientes: PacienteModel[] = [];
  cargando = false;


  

  constructor( private pacientesService: PacientesService ) { }

  ngOnInit() {

    this.cargando = true;
    this.pacientesService.getPacientes()
      .subscribe( (resp:any) => {
        this.pacientes = resp;
        this.cargando = false;
      });

  }

   borrarPaciente( paciente: PacienteModel, i: number ) {

     Swal.fire({
       title: '¿Está seguro?',
       text: `Está seguro que desea borrar a ${ paciente.nombrecompleto }`,
       icon: 'question',
       showConfirmButton: true,
       showCancelButton: true
     }).then( resp => {

       if ( resp.value ) {
         this.pacientes.splice(i, 1);
         this.pacientesService.borrarPaciente( paciente.id ).subscribe();
       }

     });



   }


}
