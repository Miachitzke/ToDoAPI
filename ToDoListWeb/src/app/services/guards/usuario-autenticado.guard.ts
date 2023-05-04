import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { IUsuario } from 'src/app/interfaces/IUsuario';
import { Observable } from 'rxjs';
import jwt_decode from 'jwt-decode';


@Injectable({
  providedIn: 'root'
})
export class UsuarioAutenticadoGuard implements CanActivate {
  
  usuario!: IUsuario;

  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const token = localStorage.getItem('token');

    if (token) {
      try {
        const decodedToken: any = jwt_decode(token);
        this.usuario = {
          nome: decodedToken.unique_name,
          login: decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/userdata'],
          email: decodedToken.email,
          id: decodedToken.nameid
        };

        localStorage.setItem('usuario', JSON.stringify(this.usuario));

        return true;

      } catch (err) {
        console.error(err);
      }
    }

    this.router.navigate(['/login']);
    return false;
  }
}
