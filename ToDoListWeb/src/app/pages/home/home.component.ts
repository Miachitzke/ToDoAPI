import { Component } from '@angular/core';
import { Tarefas } from 'src/app/services/tarefas';
import { TarefasService } from 'src/app/services/tarefas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  tarefas: Tarefas[] = [];
  constructor(private tarefaService: TarefasService){}

  listarTarefas(){
    this.tarefas = this.tarefaService.listarTarefas();
  }

}
