import { Injectable } from '@angular/core';
import { Tarefas } from './tarefas';

@Injectable({
  providedIn: 'root'
})
export class TarefasService {
  tarefa: Tarefas[] = [
    { id:1 , titulo: 'titulo 1', descricao: 'descricao teste 1', prioridade: 'Normal', status: 'Em Andamento', idLista:1 },
    { id:2 , titulo: 'titulo 2', descricao: 'descricao teste 2', prioridade: 'Normal', status: 'Concluido', idLista:3 },
    { id:3 , titulo: 'titulo 3', descricao: 'descricao teste 3', prioridade: 'Normal', status: 'A fazer', idLista:2 },
    { id:4 , titulo: 'titulo 4', descricao: 'descricao teste 4', prioridade: 'Normal', status: 'A fazer', idLista:2 },
    { id:5 , titulo: 'titulo 5', descricao: 'descricao teste 5', prioridade: 'Normal', status: 'Em Andamento', idLista:3 },
    { id:6 , titulo: 'titulo 6', descricao: 'descricao teste 6', prioridade: 'Normal', status: 'Concluido', idLista:1 },
  ];

  constructor() { }

  listarTarefas(idLista: number){

    return this.tarefa.filter(t=> t.idLista === idLista);

  }

}