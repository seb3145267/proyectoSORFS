import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reglog',
  templateUrl: './reglog.component.html',
  styleUrls: ['./reglog.component.css']
})
export class ReglogComponent implements OnInit {

  usuario!:UsuarioModel ;
  recordarme = false;
  recordar = false;

  constructor(private auth:AuthService,
              private router:Router) { }

  ngOnInit(){
    this.usuario = new UsuarioModel();

    if(localStorage.getItem('email')){
      this.usuario.email = '' + localStorage.getItem('email');
      this.recordar = true;
    }
  }

  login(form: NgForm){
    if(form.invalid){return};
    // console.log(this.usuario)
    // console.log(form)
    Swal.fire({
      allowOutsideClick:false,
      icon:'info',
      text:'Espere por favor',
      showConfirmButton:false,
    })
    Swal.showLoading(Swal.getDenyButton());

    this.auth.login(this.usuario)
      .subscribe(resp=>{
        console.log(resp)
        Swal.close();

        if(this.recordar){
          localStorage.setItem('email', this.usuario.email)
        }
        this.router.navigateByUrl('/pacientes')
      },(err)=>{
        console.log(err.error.error.message)
        Swal.fire({
          icon:'error',
          title:'Error al Autentificar',
          text:err.error.error.message
        })
      })
  }

  onSubmit( form : NgForm ){
    if(form.invalid){ return }
    // console.log('Formulario enviado')
    // console.table(this.usuario);
    // console.log(form)
    Swal.fire({
      allowOutsideClick:false,
      icon:'info',
      text:'Espere por favor',
      showConfirmButton:false,
    })
    Swal.showLoading(Swal.getDenyButton());


    this.auth.nuevoUsuario(this.usuario)
     .subscribe(resp=>{
      console.log(resp)
      Swal.close();

      if(this.recordarme){
        localStorage.setItem('email', this.usuario.email)
      }

      this.router.navigateByUrl('/pacientes')
     },(err)=>{
      console.log(err.error.error.message)
      Swal.fire({
        icon:'error',
        title:'Error al Autentificar',
        text:err.error.error.message
      })
    })
  }

}
