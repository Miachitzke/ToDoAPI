import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-acaousuario',
  templateUrl: './acaousuario.component.html',
  styleUrls: ['./acaousuario.component.css']
})
export class AcaoUsuarioComponent {
  senha!: string; 
  confSenha!: string;
  compara: boolean = true;

  comparaSenha() {
    if(this.senha === this.confSenha)
      this.compara = true;
    else
      this.compara = false;
  }

}
