import { Component, NgModule } from '@angular/core';
import { Listas } from 'src/app/interfaces/IListas';
import { ListasService } from 'src/app/services/listas.services';
import { UsuarioAutenticadoGuard } from 'src/app/services/guards/usuario-autenticado.guard';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  listas: Listas[] = [];
  listasOriginal: Listas[] = [];

  listaFiltrada: Listas[] = [];
  filtroLista!: string;

  idListaDeletar!: number;
  tituloListaDeletar!: string;

  nvList: boolean = false;
  listaNova?: Listas;
  tituloListaNova!: string;

  listaEditarId!: number;
  tituloListaEditar!: string;

  isOrdemOpen: boolean = false;
  isOptionsOpen: boolean = false;

  constructor(private listaService: ListasService,
    private modalService: NgbModal,
    private auth: UsuarioAutenticadoGuard) { }

  ngOnInit() {
    this.listas.splice(0, this.listas.length);

    const idUsuario = this.auth.usuario.id!;
    this.listaService.buscarListas(idUsuario).subscribe(response => {

      if (response) {
        this.listas = response;
        this.listasOriginal = [...response];
        this.listaFiltrada = this.listasOriginal;
      }
    });
  }

  novaLista() {

    if (this.tituloListaNova) {
      this.listaNova = { nomeLista: this.tituloListaNova, usuarioID: this.auth.usuario.id! };

      this.listaService.criarLista(this.listaNova).subscribe(response => {
        if (response) {

          this.ngOnInit();
        }
      })
      this.tituloListaNova = '';
      this.nvList = !this.nvList;
    }
    else
      alert("titulo não pode ser vazio")
  }

  editarLista() {
    if (this.tituloListaEditar) {
      let editLista: Listas = { id: this.listaEditarId, nomeLista: this.tituloListaEditar, usuarioID: this.auth.usuario.id! }

      this.listaService.editarLista(editLista).subscribe((response) => {
        if (response) {
          this.ngOnInit();
          this.listaEditarId = 0;
        }
      },
        (erro) => {
          console.log(erro);
        })
    }
  }

  set filtro(value: string) {
    this.filtroLista = value;

    this.listaFiltrada = this.listas.filter((lt: Listas) => lt.nomeLista.toLocaleLowerCase().indexOf(this.filtroLista.toLocaleLowerCase()) > -1);
  }

  get filtro() {
    return this.filtroLista;
  }

  showConfirmaModal(content: any, id: number, titulo: string) {
    this.idListaDeletar = id;
    this.tituloListaDeletar = titulo;
    this.modalService.open(content, { centered: true });
  }

  deletarLista(id: number) {
    if (id)
      this.listaService.deletarLista(id).subscribe((response) => {
        if (response) {
          this.ngOnInit();
          this.modalService.dismissAll();
        }
      })
  }

  toggleOrdenacao() {
    this.isOrdemOpen = !this.isOrdemOpen;
  }

  ordenarLista(ordem: number) {
    switch (ordem) {
      case 0: // ordem id Maior para Menor
        this.listaFiltrada.sort((a, b) => b.id! - a.id!);
        break;
      case 1: // ordem id Menor para Maior
        this.listaFiltrada.sort((a, b) => a.id! - b.id!);
        break;
      case 2: // ordem nome (A pra Z)
        this.listaFiltrada.sort((a, b) => a.nomeLista!.localeCompare(b.nomeLista!));
        break;
      case 3: // ordem nome (Z pra A)
        this.listaFiltrada.sort((a, b) => b.nomeLista!.localeCompare(a.nomeLista!));
        break;
      default: // ordem original do array
        this.listaFiltrada = this.listas.slice();
        break;
    }
    this.toggleOrdenacao();
  }

}
