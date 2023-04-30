import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ITarefas } from 'src/app/interfaces/ITarefas';
import { ListasService } from 'src/app/services/listas.services';
import { TarefasService } from 'src/app/services/tarefas.service';

@Component({
  selector: 'app-listatarefas',
  templateUrl: './listatarefas.component.html',
  styleUrls: ['./listatarefas.component.css']
})
export class ListaTarefasComponent implements OnInit {
  idLista?: number;
  tituloLista?: string;
  tarefas: ITarefas[] = [];
  tarefaSelecionada: ITarefas = new ITarefas;
  prazoSelecionado = {day: null, month: null, year: null}
  checkbox: any;
  cor: string = '';
  tarefaNova: boolean = false;

  @ViewChild("modalTarefa") modalEditarTarefa: TemplateRef<any> | undefined;

  constructor(private route: ActivatedRoute, 
              private tarefasService: TarefasService,
              private listaService: ListasService,
              private modalService: NgbModal) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.idLista = +params.get('idLista')!;
      this.listarTarefas();
    });
  }

  listarTarefas() {
    if (this.idLista) {
        this.tituloLista = this.listaService.tituloLista(this.idLista);
        this.tarefas = this.tarefasService.listarTarefas(this.idLista);
    }
  }

  getPrioridadeCssClass(prioridade: number) {
    let classe = '';
    prioridade = Number(prioridade);
    switch (prioridade) {
        case 1: // Urgente
            classe = 'fill-urgente';
            break;
        case 2: // Importante
            classe = 'fill-importante';
            break;
        case 3: // Normal
            classe = 'fill-normal';
            break;
        default:
            classe = 'fill-padrao';
    }
    return classe;
  }

  getPrazo(data: string) {
    let dataFormatada = new Date(data);
    dataFormatada.setUTCDate(dataFormatada.getUTCDate()+1);
    dataFormatada.setHours(0,0,0,0);
    return dataFormatada;
  }

  getPrazoCssClass(prazo: string) {
    let classe = '';
    let dataLimite = this.getPrazo(prazo);
    let dataHoje = new Date();
    let vespera = this.getPrazo(prazo);
    vespera.setDate(dataLimite.getDate()-1);

    if (dataHoje.toLocaleDateString() == vespera.toLocaleDateString())
        classe = 'prazo-importante';
    else if (dataHoje >= dataLimite)
        classe = 'prazo-urgente';
    if (dataLimite) {
        console.log(dataLimite);
        
    }

    return classe;
  }

  novaTarefa() {
    let isTarefaCriada = false;
    if (this.tarefaSelecionada) {
        this.tarefaSelecionada.dataCriacao = new Date().toISOString();
        this.tarefaSelecionada.dataLimite = new Date(this.prazoSelecionado.year!, this.prazoSelecionado.month!-1, this.prazoSelecionado.day!).toISOString();
        
        isTarefaCriada = this.tarefasService.criarNovaTarefa(this.tarefaSelecionada);
    }
    
    if (isTarefaCriada)
        alert("Nova Tarefa Criada!");
    this.listarTarefas();
  }

  atualizarTarefa() {
    let isTarefaAtualizada = false;
    if (this.tarefaSelecionada) {
        this.tarefaSelecionada.dataCriacao = new Date().toISOString();
        this.tarefaSelecionada.dataLimite = new Date(this.prazoSelecionado.year!, this.prazoSelecionado.month!-1, this.prazoSelecionado.day!).toISOString();
        
        isTarefaAtualizada = this.tarefasService.atualizarTarefa(this.tarefaSelecionada);
    }
    
    if (isTarefaAtualizada)
        alert("Tarefa Atualizada");
    this.listarTarefas();
  }

  deletarTarefa(id: number) {
    let isTarefaDeletada = false;
    if (this.tarefaSelecionada) {
        isTarefaDeletada = this.tarefasService.deletarTarefa(id);
    }
    
    if (isTarefaDeletada)
        alert("Tarefa Deletada");
  }

  concluirTarefa(idTarefa: number) {

    if(idTarefa) {
        let isTarefaConcluida = false;
        if (this.tarefaSelecionada) {
            isTarefaConcluida = this.tarefasService.concluirTarefa(idTarefa);
        }
        
        if (isTarefaConcluida)
            alert("Tarefa ID: "+ idTarefa +" concluída com sucesso!");
        this.listarTarefas();
    }
    else{
      alert("A tarefa não pôde ser concluída!");
    }
  }

  openModal(tarefa?: ITarefas) {
    const modal = this.modalService.open(this.modalEditarTarefa, {
        centered: true,
    });

    this.tarefaSelecionada = new ITarefas();
    
    if (tarefa) {
      this.tarefaSelecionada = tarefa;
      this.tarefaNova = false;

        console.log(tarefa);
        
        // switch (this.tarefaSelecionada.prioridade) {
        //     case 1: // Urgente
        //         this.cor = '#e64e4e';
        //         break;
        //     case 2: // Importante
        //         this.cor = '#fac528';
        //         break;
        //     case 3: // Normal
        //         this.cor = '#289bfa';
        //         break;
        //     default:
        //         this.cor = '#787878';
        //         break;
    
        // }
    }
    else
    {
      this.tarefaNova = true;
    }

  }

  resize(textarea: HTMLTextAreaElement) {
    if (textarea) {
        if (textarea.scrollHeight > textarea.offsetHeight) {
            if (textarea.rows <=12)
                textarea.rows += 1;
        }
        if (textarea.scrollHeight <= textarea.offsetHeight) {
            if (textarea.rows > 2)
                textarea.rows -= 1
            if (textarea.textLength == 0)
                textarea.rows = 1
        }
        if (textarea.rows > 4)
            textarea.style.overflow = 'auto';
        else
            textarea.style.overflow = 'hidden';

    }
  }

}