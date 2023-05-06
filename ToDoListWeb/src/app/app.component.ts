import { Component } from '@angular/core';
import { UsuarioService } from './services/usuario.service';
import { Router, NavigationEnd } from '@angular/router';
import { IUsuario } from './interfaces/IUsuario';
import { UsuarioAutenticadoGuard } from './services/guards/usuario-autenticado.guard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  usuario: IUsuario | undefined;
  nomeUsuario!: string;

  rotasNaoMostrar = ['login', 'novousuario', '**', ''];

  mostrarMenu: boolean = false;

  sidebarExpanded = true;

  constructor(private rota: Router, private usuarioService: UsuarioService, public auth: UsuarioAutenticadoGuard) {
    rota.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const rotaAtual = event.url;

        if (this.rotasNaoMostrar.indexOf(rotaAtual.replace('/', '')) !== -1) {
          this.mostrarMenu = false;
        } else {
          this.mostrarMenu = true;
        }
      }
    });
  }


  ngOnInit() {

    this.usuarioService.mostrarMenuEmitter.subscribe(

      mostrar => this.mostrarMenu = mostrar
    );
  }

  deslogar() {
    this.mostrarMenu = false;

    localStorage.clear();
    localStorage.removeItem("usuario");
    localStorage.removeItem("token");

    this.usuarioService.deslogar();
  }

}
