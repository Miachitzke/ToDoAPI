import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ITarefas } from 'src/app/interfaces/ITarefas';
import { TarefasService } from 'src/app/services/tarefas.service';

@Component({
  selector: 'app-listatarefas',
  templateUrl: './listatarefas.component.html',
  styleUrls: ['./listatarefas.component.css']
})
export class ListaTarefasComponent implements OnInit {
  idLista?: number;
  tarefas: ITarefas[] = [];
  
  constructor( private route: ActivatedRoute, private tarefasService: TarefasService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.idLista = +params.get('idLista')!;
      this.tarefas = this.tarefasService.listarTarefas(this.idLista);
    });
  }
}
