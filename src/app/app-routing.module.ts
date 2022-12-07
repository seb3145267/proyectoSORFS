import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './home/menu/menu.component';
import { LogregComponent } from './usereg/logreg/logreg.component';

const routes: Routes = [
  {
    path:'cuenta',
    component:LogregComponent
  },
  {
    path:'menu',
    component:MenuComponent
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
