import { Component, OnInit } from '@angular/core';
import { MedicamentoModel } from 'src/app/models/medicamento.model';
import { MedicamentosService } from 'src/app/services/medicamentos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-medicamentos',
  templateUrl: './medicamentos.component.html',
  styleUrls: ['./medicamentos.component.css']
})
export class MedicamentosComponent implements OnInit {

  medicamentos: MedicamentoModel[] = [];
  cargando = false;


  constructor( private medicamentosService: MedicamentosService ) { }

  ngOnInit(){
    this.cargando = true;
    this.medicamentosService.getMedicamentos()
      .subscribe( (resp:any) => {
        this.medicamentos = resp;
        this.cargando = false;
      });
  }

  borrarMedicamento( medicamento: MedicamentoModel, i: number ) {

    Swal.fire({
      title: '¿Está seguro?',
      text: `Está seguro que desea borrar a ${ medicamento.nombremedicamento }`,
      icon: 'question',
      showConfirmButton: true,
      showCancelButton: true
    }).then( resp => {

      if ( resp.value ) {
        this.medicamentos.splice(i, 1);
        this.medicamentosService.borrarMedicamento( medicamento.id ).subscribe();
      }

    });



  }

}
