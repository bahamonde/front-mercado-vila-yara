import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/usuarios.service';
import { Usuario } from '../usuario'; 

@Component({
  selector: 'app-usuarios-lista',
  templateUrl: './usuarios-lista.component.html',
  styleUrls: ['./usuarios-lista.component.css']
})

export class UsuariosListaComponent implements OnInit {

  usuarios: Usuario[]; //faz um array de Usuario vazio

  constructor(private service: UsuariosService) {  
 
  } 

  ngOnInit(): void {
    this.service      
    .getUsuarios()
    .subscribe( resposta => this.usuarios = resposta )
  }

}
