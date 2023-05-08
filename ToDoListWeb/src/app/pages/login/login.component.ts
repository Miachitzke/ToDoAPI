import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { IUsuario } from '../../interfaces/IUsuario';
import { UsuarioService } from '../../services/usuario.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    formLogin!: FormGroup;
    lembrar?: boolean = false;

    nomeUsuario?: string;
    loginUsuario?: string;
    emailUsuario?: string;
    senhaUsuario!: string;
    confSenha!: string;

    imgLogo : string = "assets/todo_logo_transparente.png";

    constructor(private formBuilder: FormBuilder,
        private usuarioService: UsuarioService,
        private router: Router,
        private modalService: NgbModal) { }

    ngOnInit(): void {
        this.criarForm();
    }

    criarForm() {
        this.formLogin = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            senha: ['', [Validators.required]],
            lembrar: []
        });
    }

    logar() {
        if (this.formLogin.invalid) return;

        var usuario = this.formLogin.getRawValue() as IUsuario;
        this.usuarioService.logar(usuario, this.lembrar!).subscribe((token) => {
            localStorage.setItem('token', token);

            this.router.navigate(['listastarefa']);
        },
            (error) => {
                alert(error);
            });


    }

    openModal(content: any) {
        this.modalService.open(content, { centered: true });
    }

    compara: boolean = true;

    comparaSenha() {
        if (this.senhaUsuario === this.confSenha) {
            this.compara = true;
        }
        else
            this.compara = false;
    }

    criarUsuario() {
        if (this.nomeUsuario && this.loginUsuario && this.emailUsuario && this.compara) {
            const usuario: IUsuario = {
                nome: this.nomeUsuario,
                login: this.loginUsuario,
                email: this.emailUsuario,
                senha: this.senhaUsuario
            }

            this.usuarioService.novoUsuario(usuario).subscribe(
                (response) => {
                    console.log(response);
                },
                (error) => {
                    console.error(error);
                }
            );
        }
        else {
            alert('erro');
        }
    }
}

