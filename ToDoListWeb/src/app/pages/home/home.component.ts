import { Component, NgModule } from '@angular/core';
import { Listas } from 'src/app/interfaces/IListas';
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

  ngOnInit() {
    this.listaService.buscarListas(1).subscribe(response => {
    
      if(response)
      this.listas.push(...response)
    
    });
  }
  
  

  novaLista() {
    alert("Nova lista");
  }

}
