import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
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
  prazoSelecionado = {day: 0, month: 0, year: 0};
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

  ngOnChanges() {
    this.listarTarefas();
  }

  listarTarefas() {
    this.tarefas = [];

    if (this.idLista) {
        this.tituloLista = this.listaService.tituloLista(this.idLista);

        this.tarefasService.listarTarefas(this.idLista).subscribe(response => {
    
          if(response)
          this.tarefas.push(...response)
        
        });
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

    return classe;
  }

  prazoToDate() {
    if (this.prazoSelecionado != null && this.prazoSelecionado.year != 0) {
        let novaData = new Date(this.prazoSelecionado.year, this.prazoSelecionado.month, this.prazoSelecionado.day);
        if (novaData.getDate() > 1)
            novaData.setDate(novaData.getDate()-1);
        else
            novaData.setDate(novaData.getDate()-2);
        novaData.setMonth(novaData.getMonth()-1);
        return novaData.toISOString();
    }
    return "";
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
    let temPrazo = false;
    
    if (tarefa) {
      this.tarefaSelecionada = tarefa;
      if (this.tarefaSelecionada.dataLimite) {
        let data = new Date(this.tarefaSelecionada.dataLimite!);
        data.setUTCDate(data.getUTCDate()+1);
        this.prazoSelecionado = {
          day : data.getDate(),
          month : data.getMonth()+1,
          year : data.getFullYear()
        }
        temPrazo = true;
      }

      this.tarefaNova = false;

    }
    else
    {
      this.tarefaNova = true;
    }

    if (!temPrazo) {
      this.prazoSelecionado = {
        day : 0,
        month : 0,
        year : 0
      }
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