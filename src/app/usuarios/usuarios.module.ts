import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule  } from '@angular/router';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { UsuariosFormComponent } from './usuarios-form/usuarios-form.component';
import { UsuariosListaComponent } from './usuarios-lista/usuarios-lista.component';


@NgModule({
  declarations: [
    UsuariosFormComponent,
    UsuariosListaComponent
  ],
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    RouterModule
  ], exports: [
    UsuariosFormComponent,
    UsuariosListaComponent
  ]
})
export class UsuariosModule { }
