import { Component, EventEmitter, Input, Output, NgModule } from "@angular/core";

@Component({
  selector: "my-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"]
})
export class SidebarComponent {
  @Input() isExpanded: boolean = false;
  @Output() toggleSidebar: EventEmitter<boolean> = new EventEmitter<boolean>();

    listaTarefas: string[] = [];

    ngOnInit(): void {
        this.listaTarefas.push("Lista de Tarefas 1");
        this.listaTarefas.push("Lista de Tarefas 2");
        this.listaTarefas.push("Lista de Tarefas 3");
    };

  handleSidebarToggle = () => this.toggleSidebar.emit(!this.isExpanded);
}
