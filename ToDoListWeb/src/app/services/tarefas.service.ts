import { Injectable } from '@angular/core';
import { Tarefas } from './tarefas';

@Injectable({
  providedIn: 'root'
})
export class TarefasService {
  tarefas: Tarefas[] = [
    { id:1 , titulo: 'titulo 1', descricao: 'descricao teste 1', prioridade: 'Normal', status: 'Em Andamento' },
    { id:2 , titulo: 'titulo 2', descricao: 'descricao teste 2', prioridade: 'Normal', status: 'Concluido' },
    { id:3 , titulo: 'titulo 3', descricao: 'descricao teste 3', prioridade: 'Normal', status: 'A fazer' },
    { id:4 , titulo: 'titulo 4', descricao: 'descricao teste 4', prioridade: 'Normal', status: 'A fazer' },
    { id:5 , titulo: 'titulo 5', descricao: 'descricao teste 5', prioridade: 'Normal', status: 'Em Andamento' },
    { id:6 , titulo: 'titulo 6', descricao: 'descricao teste 6', prioridade: 'Normal', status: 'Concluido' },
  ];

  constructor() { }

  listarTarefas(){
    return this.tarefas;
  }

  remover(){
    
  }
}