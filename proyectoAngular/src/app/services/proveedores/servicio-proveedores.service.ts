import { Injectable } from '@angular/core';
import { proveedores } from '../../data/proveedores';

@Injectable({
  providedIn: 'root'
})
export class ServicioProveedoresService {

  proveedoresData: any[] = []

  constructor() {
    this.proveedoresData = structuredClone(proveedores)
  }

  public getProveedores() {
    return this.proveedoresData;
  }

  public getProveedorById(id: string) {
    return this.proveedoresData.filter(p => p.codigo == id)[0]
  }

  public addProveedor(prov: any) {
    this.proveedoresData.push(prov);
  }

  public editProveedor(id: string, prov: any) {
  }

  public deleteProveedor(id: string) {
    this.proveedoresData = this.proveedoresData.filter(p => p.codigo !== id)
  }
}