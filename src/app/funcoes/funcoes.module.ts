import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FuncoesRoutingModule } from './funcoes-routing.module';
import { FuncoesFormComponent } from './funcoes-form/funcoes-form.component';
import { FuncoesListaComponent } from './funcoes-lista/funcoes-lista.component';


@NgModule({
  declarations: [
    FuncoesFormComponent,
    FuncoesListaComponent
  ],
  imports: [
    CommonModule,
    FuncoesRoutingModule
  ], exports: [
    FuncoesFormComponent,
    FuncoesListaComponent
  ]
})
export class FuncoesModule { }
