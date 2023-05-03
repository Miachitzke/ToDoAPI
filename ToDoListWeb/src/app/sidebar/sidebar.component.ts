import { Component, EventEmitter, Input, Output, NgModule } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ListasService } from "../services/listas.services";
import { Listas } from "../interfaces/IListas";

@Component({
  selector: "my-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"]
})
export class SidebarComponent {
  @Input() isExpanded: boolean = false;
  @Output() toggleSidebar: EventEmitter<boolean> = new EventEmitter<boolean>();

  idLista?: number;

  listaTarefas?: Listas[] = [];

  constructor(private route: ActivatedRoute,
    private listaService: ListasService) { }

    ngOnInit() {
      this.listaService.buscarListas(1)!.subscribe(
        (list: Listas[]) => this.listaTarefas = list,
        (error: any) => console.log(error)
      );
    }    

  handleSidebarToggle = () => this.toggleSidebar.emit(!this.isExpanded);

}