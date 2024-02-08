import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../../services/auth-service.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  usuario: string = '';
  contrasenia: string = '';

  constructor(
    private authServiceService : AuthServiceService,
    public router: Router,
  ) { }

  ngOnInit(): void {
    if( this.authServiceService.isLoggedIn() === true ){

      this.router.navigate(['/home'])
    }else{

    }
  }

  login() {
    if (this.usuario !== '' && this.contrasenia !== '') {
      if (this.authServiceService.login(this.usuario, this.contrasenia)) {
        // Acceso correcto, mostrar SweetAlert de éxito
        Swal.fire({
          icon: 'success',
          title: '¡Inicio de sesión exitoso!',
          text: '¡Bienvenido de nuevo!',
          timer: 1500, // Ocultar automáticamente después de 2 segundos
          showConfirmButton: false
        }).then(() => {
          this.router.navigate(['/home']);
        });
      } else {
        // Error en el inicio de sesión, mostrar SweetAlert de error
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Usuario o contraseña incorrectos.'
        });
      }
    } else {
      // Campos vacíos, mostrar SweetAlert de advertencia
      Swal.fire({
        icon: 'warning',
        title: 'Campos vacíos',
        text: 'Por favor, completa todos los campos.'
      });
    }
  }
















}
