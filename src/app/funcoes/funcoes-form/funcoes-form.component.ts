import { Component, OnInit } from '@angular/core';
import { Funcao } from '../funcao';

@Component({
  selector: 'app-funcoes-form',
  templateUrl: './funcoes-form.component.html',
  styleUrls: ['./funcoes-form.component.css']
})
export class FuncoesFormComponent implements OnInit {

  funcao : Funcao;

  constructor() { }

  ngOnInit(): void {
  }

}
