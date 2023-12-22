import { Component } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { ProveedoresService } from '../../../../services/proveedores.service';
import { Proveedores } from '../../../../interfaces/Proveedores';

@Component({
  selector: 'app-form-alta',
  templateUrl: './form-alta.component.html',
  styleUrl: './form-alta.component.css'
})
export class FormAltaComponent {

  nombre = '';
  rubro = '';
  email = '';
  apellido = '';
  cuit = '';

  constructor(public proveedoresS : ProveedoresService){}
  
  crearProveedor(form:NgForm){
    const proveedor: Proveedores = {
      nombre: form.value.nombre,
      apellido: form.value.apellido,
      rubro: form.value.rubro,
      cuit: form.value.cuit,
      email: form.value.email
    };

    this.proveedoresS.addProveedor(proveedor);
  }

}
