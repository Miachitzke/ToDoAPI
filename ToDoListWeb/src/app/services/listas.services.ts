import { Injectable } from '@angular/core';
import { Listas } from '../interfaces/IListas';
import { AppModule } from '../app.module';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ListasService {

    listas: Listas[] = [];

    constructor(private http: HttpClient,
                private API: AppModule) { }

    private baseUrl = this.API.getBaseUrl();

    buscarListas(idUsuario: number): Observable<Listas[]> {
        const url = `${this.baseUrl}/ListaTarefas/BuscarPorIdUsuario/${idUsuario}`;
        return this.http.get<Listas[]>(url);
    }
    
    criarLista(lista: Listas) : Observable<any> {
        const url = `${this.baseUrl}/ListaTarefas/Cadastrar`;
        return this.http.post(url,lista);
    }

    editarLista(lista: Listas): Observable<any> {
        const url = `${this.baseUrl}/ListaTarefas/${lista.id!}`;
        return this.http.put(url, lista);
    }

    tituloLista(idLista: number): any {
        const listaFiltrada = this.listas.find(lt => lt.id === idLista);
        var ttl = listaFiltrada ? listaFiltrada.nomeLista : '';

        return ttl;
    }

    deletarLista(id: number): Observable<any> {
        const url = `${this.baseUrl}/ListaTarefas/${id}`;
        return this.http.delete(url);
    }

}