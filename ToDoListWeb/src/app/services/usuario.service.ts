import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IUsuario } from '../interfaces/IUsuario';
import { AppModule } from '../app.module';
import { Serializer } from '@angular/compiler';


@Injectable({
    providedIn: 'root'
})
export class UsuarioService {


    constructor(private httpClient: HttpClient,
        private router: Router,
        private API: AppModule) { }

    private baseUrl = this.API.baseURL;

    mostrarMenuEmitter = new EventEmitter<boolean>();
    
    novoUsuario(usuario: IUsuario): Observable<IUsuario> {
        
        return this.httpClient.post<IUsuario>(`${this.baseUrl}/Usuario/Cadastrar`, usuario);
    }
    
    login(usuario: IUsuario): Observable<string> {
        return this.httpClient.post<string>(`${this.baseUrl}/Usuario/login`, usuario);
    }

    logar(usuario: IUsuario, lembrar: boolean) {
        this.login(usuario).subscribe(
            (token: string) => {
                if (lembrar) {
                    localStorage.setItem('usuario', JSON.stringify(usuario));
                    localStorage.setItem('token', token);
                }
                this.mostrarMenuEmitter.emit(true);
                this.router.navigate(['listastarefa']);
            },
            (error) => {
                console.error(error);
                this.mostrarMenuEmitter.emit(false);
            }
        );
    }

    deslogar() {
        localStorage.clear();
        this.router.navigate(['login']);
    }

    get logado(): boolean {
        return localStorage.getItem('token') ? true : false;
    }

}