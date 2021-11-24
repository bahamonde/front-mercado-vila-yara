import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { ProdutosListaComponent } from'./produtos/produtos-lista/produtos-lista.component'

const routes: Routes = [
  { path:"produtos", component: ProdutosListaComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
