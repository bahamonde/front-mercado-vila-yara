import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutosRoutingModule } from './produtos-routing.module';
import { ProdutosFormComponent } from './produtos-form/produtos-form.component';
import { ProdutosListaComponent } from './produtos-lista/produtos-lista.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ProdutosFormComponent,
    ProdutosListaComponent,
  ],
  imports: [
    CommonModule,
    ProdutosRoutingModule,
    FormsModule
  ], exports: [
    ProdutosFormComponent
  ]
})
export class ProdutosModule { }
