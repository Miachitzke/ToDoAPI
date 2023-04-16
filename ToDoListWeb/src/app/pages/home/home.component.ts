import { Component, NgModule } from '@angular/core';
import { Listas } from 'src/app/services/listas';
import { RouterModule } from '@angular/router';
import { ListasService } from 'src/app/services/listas.services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  listas: Listas[] = [];
  
  constructor(private listaService: ListasService){}

  ngOnInit(){
    this.listas = this.listaService.buscarListas();
  }

  }
