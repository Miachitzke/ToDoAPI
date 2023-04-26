import { Injectable } from '@angular/core';
import { Listas } from '../interfaces/IListas';

@Injectable({
providedIn: 'root'
})
export class ListasService {
listas: Listas[] = [
    { id:1 , titulo: 'Lista de tarefas 1', dataCriacao: '2023-04-14', idUsuario: 1},
    { id:2 , titulo: 'Lista de tarefas 2', dataCriacao: '2023-04-14', idUsuario: 1},
    { id:3 , titulo: 'Lista de tarefas 3', dataCriacao: '2023-04-14', idUsuario: 1},
];

constructor() { }

buscarListas(idUsuario: number){

    return this.listas.filter( lista=> lista.idUsuario === idUsuario)!;
}

tituloLista(idLista: number): any {
    const listaFiltrada = this.listas.find( lt => lt.id === idLista);
    var ttl = listaFiltrada ? listaFiltrada.titulo : '';
    
    return ttl;
}



}