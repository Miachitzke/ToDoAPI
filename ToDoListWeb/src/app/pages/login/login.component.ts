import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { IUsuario } from '../../interfaces/IUsuario';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin!: FormGroup;
  lembrar?: boolean = false;

  constructor(private formBuilder: FormBuilder,
              private usuarioService: UsuarioService) { }
  ngOnInit(): void {
    this.criarForm();
  }
  criarForm(){
    this.formLogin = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required]],
      lembrar:[]
    });
  }
  logar(){
    if(this.formLogin.invalid) return;
    var usuario = this.formLogin.getRawValue() as IUsuario;
    this.usuarioService.logar(usuario,this.lembrar!);
    }

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