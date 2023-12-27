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

  public getProductoBySKU (codSKU:string){
    const producto = this.arrayProductos.filter( (producto) =>{
      return producto.codSKUProducto == codSKU;
    })
    return producto[0];
  }

  public getProductosByProveedor(idProveedor: string) {
    const productosProveedor = this.arrayProductos.filter((producto) => {
      return producto.idProveedor == idProveedor;
    });
    return productosProveedor;
  }

  public addProducto(producto : Productos) {
    this.arrayProductos.push(producto);
  }

  public deleteProducto(codSKUProducto:string) {
    return this.arrayProductos = this.arrayProductos.filter( p => p.codSKUProducto !== codSKUProducto )
  }

  public updateProducto(p:Productos) {
    //let indice = this.arrayProveedores.findIndex( proveedor => proveedor.id == p.id)
    let indice = this.arrayProductos.findIndex( producto => producto.codSKUProducto == p.codSKUProducto )
    this.arrayProductos[indice] = p;
  }


}
