import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Observable,of } from 'rxjs';
import { IUsuario } from '../interfaces/IUsuario';

//const ToDoAPI; implementar

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private httpClient: HttpClient,
    private router: Router) { }

    login(usuario: IUsuario):Observable<any>
    {
      var retorno: any = [];

      return retorno;
    }

    mostrarMenuEmitter = new EventEmitter<boolean>();

//TRECHO ABAIXO DEVE SER APAGADO. USADO APENAS PARA TESTE DA TELA

logar(usuario: IUsuario, lembrar:boolean) {

    if(usuario.email === "meuemail@example.com" && usuario.senha == "123")
    {
      if(lembrar){localStorage.setItem('usuario', Buffer.from(JSON.stringify(usuario)).toString('base64'));}
      
      this.mostrarMenuEmitter.emit(true);

      this.router.navigate(['listartarefas']);
    }
    else
    {
      this.mostrarMenuEmitter.emit(false);
    }
}

deslogar() {
    localStorage.clear();
    this.router.navigate(['login']);
}

get logado(): boolean {
  return localStorage.getItem('token') ? true : false;
}

}