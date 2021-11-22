import { HttpClient } from '@angular/common/http'; 
import { Injectable } from '@angular/core';
import { Usuario } from './usuarios/usuario';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor( private http: HttpClient ) { } 

  salvar( usuario: Usuario ) : Observable<Usuario> {
      return this.http.post("http://localhost:8080/usuarios", usuario )  
  }

  getUsuario() : Usuario {
    let usuario = new Usuario();
    usuario.nome = 'OK OK';
    usuario.sobrenome = "Hum";
    return usuario;
  }

}