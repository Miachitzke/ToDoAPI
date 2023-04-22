import { Component, ViewChild, ElementRef } from '@angular/core';
import * as marked from 'marked';

@Component({
  selector: 'app-modaltarefas',
  templateUrl: './modaltarefas.component.html',
  styleUrls: ['./modaltarefas.component.css']
})
export class ModaltarefasComponent {
  urgente: boolean = false;
  

  
  toggleUrgente(): void {
    this.urgente = !this.urgente;
  }
}
