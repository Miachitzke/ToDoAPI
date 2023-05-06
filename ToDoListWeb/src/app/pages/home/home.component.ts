import { Component, NgModule } from '@angular/core';
import { Listas } from 'src/app/interfaces/IListas';
import { ListasService } from 'src/app/services/listas.services';
import { UsuarioAutenticadoGuard } from 'src/app/services/guards/usuario-autenticado.guard';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  listas: Listas[] = [];
  listasOriginal: Listas[] = [];

  nvList: boolean = false;
  listaNova?: Listas;
  tituloListaNova!: string;

  constructor(private listaService: ListasService,
    private auth: UsuarioAutenticadoGuard) { }

  ngOnInit() {
    this.listas.splice(0, this.listas.length);

    const idUsuario = this.auth.usuario.id!;
    this.listaService.buscarListas(idUsuario).subscribe(response => {

      if (response) {
        this.listas = response;
        this.listasOriginal = [...response];
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

  ordenarLista(ordem: number) {
    switch (ordem) {
      case 0: // ordem id Maior para Menor
        this.listas.sort((a, b) => b.id! - a.id!);
        break;
      case 1: // ordem id Menor para Maior
        this.listas.sort((a, b) => a.id! - b.id!);
        break;
      case 2: // ordem nome (A pra Z)
        this.listas.sort((a, b) => a.nomeLista!.localeCompare(b.nomeLista!));
        break;
      case 3: // ordem nome (Z pra A)
        this.listas.sort((a, b) => b.nomeLista!.localeCompare(a.nomeLista!));
        break;
      default: // ordem original do array
        this.listas = this.listasOriginal.slice();
        break;
    }
  }

}
