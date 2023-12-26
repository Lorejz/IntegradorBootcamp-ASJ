import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProveedoresService } from '../../../services/proveedores.service';
import { Proveedores } from '../../../interfaces/Proveedores';
import proveedores from '../../../data/proveedores';

@Component({
  selector: 'app-prod-form-alta',
  templateUrl: './prod-form-alta.component.html',
  styleUrl: './prod-form-alta.component.css'
})
export class ProdFormAltaComponent implements OnInit {

  constructor ( public proveedoresServicio: ProveedoresService ) {  }

  codSKUproducto = '';
  categoriaProducto = '';
  nombreProducto = '';
  descProducto = '';
  precioProducto = '';
  razonProvProducto = ''; //id Proveedor
  imagenProducto = '';

  proveedores : Proveedores[] = [];

ngOnInit(): void {
  this.proveedores = this.proveedoresServicio.getProveedores();
}



  crearProducto(miForm: NgForm){
    console.log(miForm.value)
    if (!miForm.valid){
      alert('complete los campos')
    }else{
      
    }
  }

}
