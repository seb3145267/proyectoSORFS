import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { MedicamentoModel } from 'src/app/models/medicamento.model';
import { MedicamentosService } from 'src/app/services/medicamentos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-medicamento',
  templateUrl: './medicamento.component.html',
  styleUrls: ['./medicamento.component.css']
})
export class MedicamentoComponent implements OnInit {

  medicamento: MedicamentoModel = new MedicamentoModel();

  constructor( private medicamentosService: MedicamentosService,
    private route: ActivatedRoute ) { }

  ngOnInit(){
    const id = ''+this.route.snapshot.paramMap.get('id');

    if ( id !== 'nuevo' ) {

      this.medicamentosService.getMedicamento( id )
      .subscribe( (resp: any) => {
        this.medicamento = resp;
        this.medicamento.id = id;
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

    if ( this.medicamento.id ) {
      peticion = this.medicamentosService.actualizarMedicamento( this.medicamento );
    } else {
      peticion = this.medicamentosService.crearMedicamento( this.medicamento );
    }

    peticion.subscribe( resp => {

      Swal.fire({
        title: this.medicamento.nombremedicamento,
        text: 'Se actualizó correctamente',
        icon: 'success',
      });

    });

}
}