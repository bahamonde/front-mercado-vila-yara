import { Component, OnInit } from '@angular/core';
import { Categoria } from '../categoria';

@Component({
  selector: 'app-categorias-form',
  templateUrl: './categorias-form.component.html',
  styleUrls: ['./categorias-form.component.css']
})
export class CategoriasFormComponent implements OnInit {

  categoria : Categoria

  constructor() { }

  ngOnInit(): void {
  }

}
