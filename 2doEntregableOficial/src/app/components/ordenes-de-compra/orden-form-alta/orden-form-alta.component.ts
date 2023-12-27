import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProveedoresService } from '../../../services/proveedores.service';
import { Proveedores } from '../../../interfaces/Proveedores';
import { ProductosService } from '../../../services/productos.service';
import { Productos } from '../../../interfaces/Productos';

@Component({
  selector: 'app-orden-form-alta',
  templateUrl: './orden-form-alta.component.html',
  styleUrl: './orden-form-alta.component.css'
})
export class OrdenFormAltaComponent implements OnInit {

  constructor (public proveedoresServicio : ProveedoresService, public productosServicio : ProductosService) {}

  codigoOrden = '';
  fechaEmisionOrden = '';
  fechaEntregaEspOrden = '';
  codProvOrden = '';
  codProductoOrden = '';


  proveedores: Proveedores[] = [];
  productosProveedor: Productos[] = [];

  ngOnInit(): void {
    this.proveedores = this.proveedoresServicio.getProveedores();
  }

  buscarProductosProveedor(){
    console.log('entro a funcion buscarProductosProveedor()')
    console.log('codigo proveedor'+this.codProvOrden)
    this.productosProveedor = this.productosServicio.getProductosByProveedor(this.codProvOrden);
    console.log(this.productosProveedor);
  }

  crearOrden(miForm : NgForm) {

  }

}
