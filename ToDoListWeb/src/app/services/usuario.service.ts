import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IUsuario } from '../interfaces/IUsuario';
import { AppModule } from '../app.module';
import { Serializer } from '@angular/compiler';

//const ToDoAPI; implementar

@Injectable({
    providedIn: 'root'
})
export class UsuarioService {
    

    constructor(private httpClient: HttpClient,
        private router: Router,
        private API: AppModule) { }

    private baseUrl = this.API.baseURL;

    login(usuario: IUsuario): Observable<any> {
        var retorno: any = [];

        return retorno;
    }

    mostrarMenuEmitter = new EventEmitter<boolean>();

    novoUsuario(usuario: IUsuario): Observable<IUsuario> {
        
        return this.httpClient.post<IUsuario>(`${this.baseUrl}/Usuario/Cadastrar`, usuario);
    }

    logar(usuario: IUsuario, lembrar: boolean) {

        if (usuario.email === "meuemail@example.com" && usuario.senha == "123") {
            if (lembrar) {
                localStorage.setItem('usuario', Buffer.from(JSON.stringify(usuario)).toString('base64'));
            }

            this.mostrarMenuEmitter.emit(true);

            this.router.navigate(['listastarefa']);
        }
        else {
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