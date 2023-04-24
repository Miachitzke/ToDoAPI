import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
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
  tarefaSelecionada: ITarefas|undefined;
  checkbox: any;
  cor: string = '';

  @ViewChild("modalTarefa") modalEditarTarefa: TemplateRef<any> | undefined;

  constructor(private route: ActivatedRoute, private tarefasService: TarefasService, private modalService: NgbModal) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.idLista = +params.get('idLista')!;
      this.tarefas = this.tarefasService.listarTarefas(this.idLista);
    });
  }

  ngAfterViewInit(){
    const elementos = document.querySelectorAll('.click-linha');

    elementos.forEach(elemento => {      
        elemento.addEventListener('click', () => {
          this.checkbox = elemento.querySelector('.custom-control-input') as HTMLInputElement;
          this.checkbox.checked = !this.checkbox.checked;        
        });      
    });
  }

  openModal(tarefa?: ITarefas) {
    const modal = this.modalService.open(this.modalEditarTarefa, {
        centered: true,
    });

    this.tarefaSelecionada = new ITarefas;
    
    if (tarefa) {
        this.tarefaSelecionada = tarefa;
    
        console.log(tarefa);
        
        switch (this.tarefaSelecionada.prioridade) {
            case "Urgente" || '1':
                this.cor = '#e64e4e';
                break;
            case 'Importante' || '2':
                this.cor = '#fac528';
                break;
            case 'Normal' || '3':
                this.cor = '#289bfa';
                break;
            default:
                this.cor = '#787878';
                break;
    
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