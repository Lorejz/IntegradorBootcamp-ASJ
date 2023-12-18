import { Component } from '@angular/core';
import { ServicioProveedoresService } from '../../../../services/proveedores/servicio-proveedores.service';

@Component({
  selector: 'app-form-alta',
  templateUrl: './form-alta.component.html',
  styleUrl: './form-alta.component.css'
})
export class FormAltaComponent {

  inputId = '';
  inputRubro = '';
  inputCuit = '';
  inputEmail = '';
  inputNombre = '';
  inputApellido = '';

  constructor( public miservicio: ServicioProveedoresService) {}


  crearProveedor(){
    let nuevoProveedor: any = {
      id: this.inputId,
      rubro: this.inputRubro,
      cuit: this.inputCuit,
      email: this.inputEmail,
      nombre: this.inputNombre,
      apellido: this.inputApellido
    };

    this.miservicio.addProveedor(nuevoProveedor);

    this.limpiarDatos();

  }

  limpiarDatos(){
    this.inputId = '';
    this.inputRubro = '';
    this.inputCuit = '';
    this.inputEmail = '';
    this.inputNombre = '';
    this.inputApellido = '';
  }

}
