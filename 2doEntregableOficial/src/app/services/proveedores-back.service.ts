import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProveedoresCreateDTO } from '../interfaces/ProveedoresCreateDTO';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProveedoresBackService {

  constructor (
    private http : HttpClient
  ) { }
  
  URL_API_PROVEEDORES = "http://localhost:8080/proveedores"

  //POST PROVEEDORES
  public crearProveedor( proveedorDTO : ProveedoresCreateDTO ) : Observable<any> {
    return this.http.post(this.URL_API_PROVEEDORES,proveedorDTO,{ observe:'response', responseType:'text' })
    .pipe(
      catchError(error => {
        console.error('Error al crear el proveedor:', error);
        return throwError(error);
      })
    );
  } 

  //GET PROVEEDORES PARA LISTADO (activos)
  public getProveedoresListActivos () : Observable<any> {
    return this.http.get(this.URL_API_PROVEEDORES+"/activos");
  }
  
  //GET PROVEEDORES PARA LISTADO (eliminados)
  public getProveedoresListEliminados () : Observable<any> {
    return this.http.get(this.URL_API_PROVEEDORES+"/eliminados");
  }

  //GET PROVEEDOR BY ID, PARA FORM MODIFICAR
  public getProveedorFormDTO(id:number) : Observable <any>{
    return this.http.get(this.URL_API_PROVEEDORES+"/"+id);
  }

  //GET PROVEEDOR PARA VISTA DETALLE
  public getProvForDetalle(idProveedor : number) : Observable<any> {
    return this.http.get(this.URL_API_PROVEEDORES+"/detalle/"+idProveedor)
  }

  //PUT PROVEEDORES
  public modificarProveedor(id:number, provDTO:ProveedoresCreateDTO) : Observable<any> {
    return this.http.put(this.URL_API_PROVEEDORES+"/"+id,provDTO,{ observe:'response', responseType:'text' })
    .pipe(
      catchError(error => {
        console.error('Error al actualizar el proveedor:', error);
        return throwError(error);
      })
    );
  }

  //DELETE PROVEEDORES (Logico)
  public darBajaProveedor(id:number) : Observable<any>  {
    return this.http.delete(this.URL_API_PROVEEDORES+"/"+id,{ observe:'response', responseType:'text' })
  }

  // DAR DE ALTA A PROVEEDOR ANTERIORMENTE ELIMINADO
  public darAltaProveedor (id:number) : Observable<any> {
    return this.http.put(this.URL_API_PROVEEDORES+"/alta/"+id,null,{ observe:'response', responseType:'text' })
  }

  // verificar codigo proveedor
  public verificarCodigoProveedor( codigoProveedor : string ) : Observable<any> {
    return this.http.get(this.URL_API_PROVEEDORES+"/verificar/"+codigoProveedor)
  }

  //get COUNT proveedores activos
  public cantidadProvActivos() : Observable<any> {
    return this.http.get(this.URL_API_PROVEEDORES+"/cant")
  }

  URL_API_RUBROS = "http://localhost:8080/rubros";

  //GET ALL RUBROS activos
  public getRubros() : Observable<any> {
    return this.http.get(this.URL_API_RUBROS)
  }

  //GET ALL RUBROS ACTIVOS Y BAJAS
  public getRubrosAll() : Observable<any> {
    return this.http.get(this.URL_API_RUBROS+"/todos")
  }

  //POST RUBRO
  public crearRubro ( rubroDTO : any ) : Observable<any>{
    return this.http.post(this.URL_API_RUBROS,rubroDTO,{ observe:'response', responseType:'text' })
  }

  //DELETE RUBRO
  public eliminarRubro (id : number) : Observable<any> {
    return this.http.delete(this.URL_API_RUBROS+"/"+id,{ observe:'response', responseType:'text'})
  }
  //PUT RUBRO
  public modificarRubro (id : number, rubro : any) : Observable<any> {
    return this.http.put(this.URL_API_RUBROS+"/"+id,rubro,{ observe:'response', responseType:'text' })
  }

  //ALTA RUBRO
  public altaRubro( id : number ) : Observable<any>{
    return this.http.put(this.URL_API_RUBROS+"/alta/"+id,null,{ observe:'response', responseType:'text' })
  }

  URL_API_CONDICIONESIVA = "http://localhost:8080/condicionesIva";
    
  //GET ALL CONDICIONES IVA
  public getCondicionesIva() : Observable<any> {
    return this.http.get(this.URL_API_CONDICIONESIVA);
  }

  URL_API_PAISES = "http://localhost:8080/paises";

  //GET ALL PAISES
  public getPaises() : Observable<any> {
    return this.http.get(this.URL_API_PAISES);
  }

  URL_API_PROVINCIAS = "http://localhost:8080/provincias/";

  //GET PROVINCIAS POR PAIS
  public getProvinciasByPais(idPais : number) : Observable<any> {
    return this.http.get(this.URL_API_PROVINCIAS+idPais);
  }



}
