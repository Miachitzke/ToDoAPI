import { Injectable } from '@angular/core';
import { Listas } from '../interfaces/IListas';
import { AppModule } from '../app.module';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ListasService {
    listas: Listas[] = [
        /* { id: 1, nomeLista: 'Nova Lista', idUsuario: 1 } */
    ];

    constructor(private http: HttpClient,
        private API: AppModule) { }

    private baseUrl = this.API.getBaseUrl();

    buscarListas(idUsuario: number): Observable<Listas[]> {
        const url = `${this.baseUrl}/ListaTarefas/BuscarPorIdUsuario/${idUsuario}`;
        return this.http.get<Listas[]>(url);
    }
    
    

    tituloLista(idLista: number): any {
        const listaFiltrada = this.listas.find(lt => lt.id === idLista);
        var ttl = listaFiltrada ? listaFiltrada.nomeLista : '';

        return ttl;
    }



}