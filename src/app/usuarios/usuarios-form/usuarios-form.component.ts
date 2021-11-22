import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/usuarios.service';

import { Usuario } from '../usuario';

@Component({
  selector: 'app-usuarios-form',
  templateUrl: './usuarios-form.component.html',
  styleUrls: ['./usuarios-form.component.css']
})
export class UsuariosFormComponent implements OnInit {

  usuario: Usuario;
  
  constructor( private service: UsuariosService) { 
    this.usuario = new Usuario();
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.service
    .salvar(this.usuario)
    .subscribe( response => {
      console.log( response );      
    })
  }

}