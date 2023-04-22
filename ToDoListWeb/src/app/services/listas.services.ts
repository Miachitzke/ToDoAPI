import { Injectable } from '@angular/core';
import { Listas } from '../interfaces/IListas';

@Injectable({
providedIn: 'root'
})
export class ListasService {
listas: Listas[] = [
    { id:1 , titulo: 'Lista de tarefas 1', dataCriacao: '2023-04-14'},
    { id:2 , titulo: 'Lista de tarefas 2', dataCriacao: '2023-04-14'},
    { id:3 , titulo: 'Lista de tarefas 3', dataCriacao: '2023-04-14'}
];

constructor() { }

buscarListas(){
    return this.listas;
}

}