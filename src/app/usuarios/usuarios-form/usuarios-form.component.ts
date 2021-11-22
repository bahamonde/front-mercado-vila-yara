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
  success: boolean = false;
  errors: String[];
  
  constructor( private service: UsuariosService) { 
    this.usuario = new Usuario();
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.service
    .salvar(this.usuario)
    .subscribe( response => {
      this.success = true;    
    }, errorResponse => {
      this.errors = errorResponse.error.errors;     
    })
  }

 

}