import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrdenCreateDTO } from '../interfaces/OrdenCreateDTO';
import { OrdenDetalleCreateDTO } from '../interfaces/OrdenDetalleCreateDTO';
import ordenes from '../data/ordenes-de-compra';

@Injectable({
  providedIn: 'root'
})
export class OrdenesBackService {

  constructor(
    private http: HttpClient
  ) { }

  URL_API_ORDENES = "http://localhost:8080/ordenes"


  // GET codOrden -- numero de orden mas alto del proveedor + 1
  public getCodigoOrden(idProveedor: number): Observable<any> {
    return this.http.get(this.URL_API_ORDENES + "/codigoProv/" + idProveedor)
  }

  // POST 
  public crearOrden(ordenCab: OrdenCreateDTO, ordenDetalles: OrdenDetalleCreateDTO[]): Observable<any> {
    const body = {
      ...ordenCab,
      ordenDetalles: ordenDetalles
    };
    console.log(body);
    return this.http.post(this.URL_API_ORDENES, body, { observe: 'response', responseType: 'text' });
  }

  //get activas listado
  public getListOrdenesActivas(): Observable<any> {
    return this.http.get(this.URL_API_ORDENES+"/activas")
  }

    //get canceladas listado
    public getListOrdenesCanceladas(): Observable<any> {
      return this.http.get(this.URL_API_ORDENES+"/canceladas")
    }


  //Get por Id para detalle
  public getOrdenById (idOrden : number) : Observable<any> {
    return this.http.get(this.URL_API_ORDENES+"/"+idOrden)
  }

  //cancelar
  public cancelOrden(idOrden : number) : Observable<any> {
    return this.http.put(this.URL_API_ORDENES+"/"+idOrden,null,{ observe: 'response', responseType: 'text' })
  }




}
