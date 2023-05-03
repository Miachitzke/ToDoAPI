import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ITarefas } from 'src/app/interfaces/ITarefas';
import { TarefasService } from 'src/app/services/tarefas.service';

@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.component.html',
  styleUrls: ['./tarefas.component.css']
})
export class TarefasComponent implements OnInit{
  tarefas: ITarefas[] = [];
  idLista!:number; 

  constructor(private rota: ActivatedRoute, private tarefasService: TarefasService){}

  ngOnInit(): void {
    this.tarefas = [];
    
    this.rota.paramMap.subscribe(params => {
      this.idLista = +params.get('idLista')!;
      this.tarefasService.listarTarefas(this.idLista).subscribe(response => {
    
        if(response)
        this.tarefas.push(...response)
      
      });
    });
  }
}