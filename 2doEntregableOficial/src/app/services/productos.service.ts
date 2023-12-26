import { Injectable } from '@angular/core';
import { Productos } from '../interfaces/Productos';
import productos from '../data/productos';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor() { }

  arrayProductos : Productos[] = productos;

  public getProductos(){
    return this.arrayProductos;
  }

  public addProducto(producto : Productos) {
    this.arrayProductos.push(producto);
  }



}
