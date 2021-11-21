import { Component, OnInit } from '@angular/core';

import { Produto } from '../produto';
import { ProdutosService } from 'src/app/produtos.service';

@Component({
  selector: 'app-produtos-form',
  templateUrl: './produtos-form.component.html',
  styleUrls: ['./produtos-form.component.css']
})
export class ProdutosFormComponent implements OnInit {

  produto: Produto;

  constructor(private service: ProdutosService) {
    this.produto = service.getProduto();

   }


  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.produto);
    
  }

}
