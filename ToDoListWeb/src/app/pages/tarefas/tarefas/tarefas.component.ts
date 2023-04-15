import { Component, OnInit } from '@angular/core';
import { Tarefas } from 'src/app/services/tarefas';
import { TarefasService } from 'src/app/services/tarefas.service';

@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.component.html',
  styleUrls: ['./tarefas.component.css']
})
export class TarefasComponent implements OnInit{
  tarefas: Tarefas[] = [];

  constructor(private tarefasService: TarefasService){}

  ngOnInit(): void {
    this.tarefas = this.tarefasService.listarTarefas();
  }
}
