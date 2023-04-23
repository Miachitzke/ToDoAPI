import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

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
        private usuarioService: UsuarioService,
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
        this.usuarioService.logar(usuario, this.lembrar!);
        console.log(usuario);

    }

    openModal(content: any) {
        this.modalService.open(content, { centered: true });
    }

}
