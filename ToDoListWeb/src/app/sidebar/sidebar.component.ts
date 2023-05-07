import { Component, EventEmitter, Input, Output, NgModule } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ListasService } from "../services/listas.services";
import { Listas } from "../interfaces/IListas";
import { UsuarioAutenticadoGuard } from "../services/guards/usuario-autenticado.guard";

@Component({
  selector: "my-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"]
})
export class SidebarComponent {
  @Input() isExpanded: boolean = false;
  @Output() toggleSidebar: EventEmitter<boolean> = new EventEmitter<boolean>();

  idLista?: number;

  listaTarefas: Listas[] | undefined;

  constructor(private route: ActivatedRoute,
    private listaService: ListasService,
    private auth: UsuarioAutenticadoGuard) { }

  ngOnInit() {
    this.atualizarListas();

  }

  atualizarListas() {
    const user = this.auth.usuario;

    this.listaService.buscarListas(user.id!).subscribe(response => {
      if (response)
        this.listaTarefas = response;
    });

    console.log("Sidebar Atualizada!")
  }

  handleSidebarToggle = () => this.toggleSidebar.emit(!this.isExpanded);

}