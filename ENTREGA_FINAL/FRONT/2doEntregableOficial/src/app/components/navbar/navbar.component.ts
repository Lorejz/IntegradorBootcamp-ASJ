import { Component } from '@angular/core';
import { AuthServiceService } from '../../services/auth-service.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(
    private authServiceService : AuthServiceService,
    private router : Router
  ){}


  isAuthenticated() : boolean {
    return this.authServiceService.isLoggedIn();
  }


  checkRoute (route : string) {

    return route === this.router.url;

  }

  checkRouteContained (route : string) {

    return this.router.url.includes(route);

  }


  logOut() {
    Swal.fire({
      title: '¿Estás seguro?',
      text: '¿Deseas cerrar la sesión?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, cerrar sesión',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.authServiceService.logout();
        this.router.navigate(['/login']);
      }
    });
  }

}
