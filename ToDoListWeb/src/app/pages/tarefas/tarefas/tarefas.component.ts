import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tarefas } from 'src/app/services/tarefas';
import { TarefasService } from 'src/app/services/tarefas.service';

@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.component.html',
  styleUrls: ['./tarefas.component.css']
})
export class TarefasComponent implements OnInit{
  tarefas: Tarefas[] = [];
  idLista!:number; 

  constructor(private rota: ActivatedRoute, private tarefasService: TarefasService){}

  ngOnInit(): void {
    this.rota.paramMap.subscribe(params => {
      this.idLista = +params.get('idLista')!;
      this.tarefas = this.tarefasService.listarTarefas(this.idLista);
    });
  }
}