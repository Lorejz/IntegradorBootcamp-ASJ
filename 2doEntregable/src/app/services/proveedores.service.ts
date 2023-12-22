import { Injectable } from '@angular/core';
import { Proveedores } from '../interfaces/Proveedores.ts';  //interface proveedores


@Injectable({
  providedIn: 'root'
})
export class ProveedoresService {

  constructor() { }

  private ArrayProveedores : Proveedores[] = [];

  // Get Proveedores
  public getProveedores() {
    const datosProveedores = localStorage.getItem('proveedores');
    if(datosProveedores){
      this.ArrayProveedores = JSON.parse(datosProveedores);
      return this.ArrayProveedores;
    }else{
      console.log('no hay proveedores cargados');
      return null;
    }
  }

  // Add Proveedor
  public addProveedor(proveedor : Proveedores) { //validar si el q se quiere agregar exista
    this.ArrayProveedores.push(proveedor);
    localStorage.setItem('proveedores' , JSON.stringify(this.ArrayProveedores))
  }


}
