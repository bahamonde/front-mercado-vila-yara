import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Produto } from './produtos/produto';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor( private http: HttpClient ) {     
  }

  salvar( produto: Produto ) : Observable<Produto> {
    return this.http.post<Produto>('http://localhost:8080/produtos' , produto);
  }

  getProduto(): Produto {
    let produto: Produto = new Produto();
    produto.nome = "Fulano de tal";
    produto.descricao = "Uma descricao";
    produto.nomeCategoria = "Bebidas";
    produto.precoUnitario = 12,90;
    produto.quantidade = 2;
    return produto;
  }

}
