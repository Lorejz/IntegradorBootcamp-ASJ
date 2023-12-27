import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../../services/productos.service';
import { Productos } from '../../../interfaces/Productos';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prod-lista',
  templateUrl: './prod-lista.component.html',
  styleUrl: './prod-lista.component.css'
})
export class ProdListaComponent implements OnInit {

  constructor( public productosService : ProductosService, public router: Router ){}

  productos : Productos[] = [];


ngOnInit(): void {
  this.productos = this.productosService.getProductos();
}

eliminarProducto(codSKUProducto:string){
  let confirmacion = confirm("¿Desea eliminar el Producto? #"+codSKUProducto);
  if(confirmacion){
    this.productos = this.productosService.deleteProducto(codSKUProducto);
    this.ngOnInit();
  }
}

modificarProducto(codSKUProducto:string){
  //this.router.navigate(['/proveedores/modificar-proveedor/',id])
  this.router.navigate(['/productos/modificar-producto/',codSKUProducto])
}


}
