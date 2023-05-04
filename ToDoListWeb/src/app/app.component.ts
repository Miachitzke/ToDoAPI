import { Component } from '@angular/core';
import { UsuarioService } from './services/usuario.service';
import { Router, NavigationEnd } from '@angular/router';
import { IUsuario } from './interfaces/IUsuario';
import { UsuarioAutenticadoGuard } from './services/guards/usuario-autenticado.guard';
import { empty } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  usuario?: IUsuario;
  nomeUsuario?: string;

  rotasNaoMostrar = ['login','novousuario','**',''];

  mostrarMenu : boolean = false;

  sidebarExpanded = true;

  constructor(private rota:Router ,private usuarioService: UsuarioService, private autenticado: UsuarioAutenticadoGuard )
  {
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

  
  ngOnInit(): void {
    this.carregarUsuario();

    this.usuarioService.mostrarMenuEmitter.subscribe(
      mostrar => this.mostrarMenu = mostrar
    );
  
  }

  carregarUsuario() {    
    this.usuario = JSON.parse(localStorage.getItem('usuario')!);  
    /* const usuario = this.usuarioService.getUsuario();
    if (usuario) {
      this.nomeUsuario = usuario.nome;
    }
    this.usuarioService.getUsuarioObservable().subscribe((usuario) => {
      if (usuario) {
        this.nomeUsuario = usuario.nome;
      } else {
        this.nomeUsuario = '';
      }
    }); */
  }

  deslogar(){
    this.mostrarMenu = false;
    this.usuarioService.deslogar();
  }

}
