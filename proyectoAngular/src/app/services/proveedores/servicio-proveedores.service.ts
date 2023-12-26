import { Injectable } from '@angular/core';
import { proveedores } from '../../data/proveedores';

@Injectable({
  providedIn: 'root'
})
export class ServicioProveedoresService {

  proveedoresData: any[] = proveedores;

  constructor() {  }

  public getProveedores() {
    return proveedores;
  }

  public getJuan(){
    return localStorage.getItem('juan');
  }

/*   //GET Usuarios
  public getUsers(): Observable<any> {
    console.log('HTTP GET');
    return this.http.get(this.URL_API);
  } */

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