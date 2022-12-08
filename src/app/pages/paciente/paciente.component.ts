import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';


import { PacientesService } from '../../services/pacientes.service';


import { PacienteModel } from 'src/app/models/paciente.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css']
})
export class PacienteComponent implements OnInit {

  paciente: PacienteModel = new PacienteModel();


  constructor( private pacientesService: PacientesService,
               private route: ActivatedRoute,
               private router:Router ) { }

  ngOnInit() {

    const id = ''+this.route.snapshot.paramMap.get('id');

    if ( id !== 'nuevo' ) {

      this.pacientesService.getPaciente( id )
      .subscribe( (resp: any) => {
        this.paciente = resp;
        this.paciente.id = id;
      });

    }

  }

  guardar( form: NgForm ) {

    if ( form.invalid ) {
      console.log('Formulario no válido');
      Swal.fire({
        icon: 'error',
        title: 'Error al guardar',
        text: 'Favor de verificar los datos'
      })
      return;
    }

    Swal.fire({
      title: 'Espere',
      text: 'Guardando información',
      icon: 'info',
      allowOutsideClick: false,
      showConfirmButton:false,
    });
    Swal.showLoading(Swal.getDenyButton());


    let peticion: Observable<any>;

    if ( this.paciente.id ) {
      peticion = this.pacientesService.actualizarPaciente( this.paciente );
      this.router.navigateByUrl('/pacientes')
    } else {
      peticion = this.pacientesService.crearPaciente( this.paciente );
      this.router.navigateByUrl('/pacientes')
    }

    peticion.subscribe( resp => {

      Swal.fire({
        title: this.paciente.nombrecompleto,
        text: 'Se actualizó correctamente',
        icon: 'success',
      });

    });



  }

}
