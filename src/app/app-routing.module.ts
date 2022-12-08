import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OpRegistroComponent } from './opciones-registro/op-registro/op-registro.component';
import { LogregComponent } from './usereg/logreg/logreg.component';

const routes: Routes = [
  {
    path:'cuenta',
    component:LogregComponent
  },
  {
    path:'oppaciente',
    component:OpRegistroComponent
  }
  // {
  //   path:'regmedicamento',
  //   component:RegMedicamentoComponent
  // },
  // {
  //   path:'opcregistro',
  //   component:OpcRegistroComponent
  // }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
