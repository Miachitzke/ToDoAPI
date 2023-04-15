import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, UrlTree } from '@angular/router';
import { UsuarioService } from '../usuario.service'; 

@Injectable({
  providedIn: 'root'
})
export class UsuarioAutenticadoGuard implements CanActivate{
  constructor(
    private usuarioService: UsuarioService,
    private router: Router) { }
  canActivate(){
    if (1-2 ) {
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }
}