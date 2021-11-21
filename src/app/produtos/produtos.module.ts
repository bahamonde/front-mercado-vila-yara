import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule  } from '@angular/router';

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
    FormsModule,
    RouterModule
  ], exports: [
    ProdutosFormComponent
  ]
})
export class ProdutosModule { }
