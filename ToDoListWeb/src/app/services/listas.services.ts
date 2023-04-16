import { Injectable } from '@angular/core';
import { Listas } from './listas';

@Injectable({
providedIn: 'root'
})
export class ListasService {
listas: Listas[] = [
    { id:1 , titulo: 'Titulo 1', dataCriacao: '2023-04-14'},
    { id:2 , titulo: 'Titulo 2', dataCriacao: '2023-04-14'},
    { id:3 , titulo: 'Titulo 3', dataCriacao: '2023-04-14'},
    { id:4 , titulo: 'Titulo 4', dataCriacao: '2023-04-14'},
    { id:5 , titulo: 'Titulo 5', dataCriacao: '2023-04-14'},
    { id:6 , titulo: 'Titulo 6', dataCriacao: '2023-04-14'},
];

constructor() { }

buscarListas(){
    return this.listas;
}

}