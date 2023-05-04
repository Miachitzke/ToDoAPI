import { Component, NgModule } from '@angular/core';
import { Listas } from 'src/app/interfaces/IListas';
import { RouterModule } from '@angular/router';
import { ListasService } from 'src/app/services/listas.services';
import { UsuarioAutenticadoGuard } from 'src/app/services/guards/usuario-autenticado.guard';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  listas: Listas[] = [];
  
  constructor(private listaService: ListasService, private autenticado: UsuarioAutenticadoGuard){}

  ngOnInit() {
    const idUsuario = JSON.parse(localStorage.getItem('usuario')!).id;


    this.listaService.buscarListas(idUsuario).subscribe(response => {
    
      if(response)
      this.listas.push(...response)
    
    });
  }
  
  

  novaLista() {
    alert("Nova lista");
  }

}
