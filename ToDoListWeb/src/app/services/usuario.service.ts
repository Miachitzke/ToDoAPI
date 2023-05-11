import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import { IUsuario } from '../interfaces/IUsuario';
import { AppModule } from '../app.module';
import * as CryptoJS from 'crypto-js';

@Injectable({
    providedIn: 'root'
})
export class UsuarioService {

    constructor(private httpClient: HttpClient,
        private router: Router,
        private API: AppModule) { }

    private baseUrl = this.API.getBaseUrl();


    mostrarMenuEmitter = new EventEmitter<boolean>();

    novoUsuario(usuario: IUsuario): Observable<IUsuario> {

        return this.httpClient.post<IUsuario>(`${this.baseUrl}/Usuario/Cadastrar`, usuario);
    }

    logar(usuario: IUsuario, lembrar: boolean): Observable<any> {
        return this.httpClient.post(`${this.baseUrl}/Usuario/login`, usuario, { responseType: 'text' })
    }

    deslogar() {

        localStorage.clear();
        this.router.navigate(['login']);
    }

}