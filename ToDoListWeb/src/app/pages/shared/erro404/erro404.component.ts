import { Component } from '@angular/core';

@Component({
  selector: 'app-erro404',
  templateUrl: './erro404.component.html',
  styleUrls: ['./erro404.component.css']
})
export class Erro404Component {
  
  //Implementar lógica para validar se o usuario está logado ou não

  //Se usuario logado
  //pagAnterior = 'listastarefa';
  //Senão
  pagAnterior: string ='login';

}
