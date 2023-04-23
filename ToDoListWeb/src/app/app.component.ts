import { Component } from '@angular/core';
import { UsuarioService } from './services/usuario.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  rotasNaoMostrar = ['login','novousuario','**',''];

  mostrarMenu : boolean = false;

  sidebarExpanded = true;

  constructor(private rota:Router ,private usuarioService: UsuarioService )
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
    this.usuarioService.mostrarMenuEmitter.subscribe(
      mostrar => this.mostrarMenu = mostrar
    );

    
  
  }
  deslogar(){
    this.mostrarMenu = false;
    this.usuarioService.deslogar();
  }

}
