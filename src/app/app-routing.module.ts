import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogregComponent } from './usereg/logreg/logreg.component';

const routes: Routes = [
  {
    path:'cuenta',
    component:LogregComponent
  }
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
