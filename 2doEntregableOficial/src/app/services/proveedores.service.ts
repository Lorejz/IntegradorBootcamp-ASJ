import { Injectable } from '@angular/core';
import { Proveedores } from '../interfaces/Proveedores';
import proveedores from '../data/proveedores';

@Injectable({
  providedIn: 'root'
})
export class ProveedoresService {

  arrayProveedores: Proveedores[] = proveedores;

  constructor() { }

   //datosproveedor : any = {}; //array para modificacion

  // CRUD - Create, Read, Update, Delete
  // Get Proveedores
  public getProveedores(){
    return this.arrayProveedores;
  }

  public getProveedorByid(id:string) {
    const proveedor = this.arrayProveedores.filter( (proveedor) =>{
      return proveedor.id == id;
    })
    return proveedor[0];
  }
  
  // Add Proveedor
  public addProveedor(proveedor:Proveedores){
    this.arrayProveedores.push(proveedor);
  }

  // Delete Proveedor
  public deleteProveedor(id:any){
    this.arrayProveedores = this.arrayProveedores.filter(p => p.id !== id )
  }

  // Edit Proveedor
  public updateProveedor(p:Proveedores){
    let indice = this.arrayProveedores.findIndex( proveedor => proveedor.id == p.id)
    this.arrayProveedores[indice] = p;
  }

}
