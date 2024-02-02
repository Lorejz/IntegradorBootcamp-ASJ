import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductosFormDTO } from '../interfaces/ProductosFormDTO';

@Injectable({
  providedIn: 'root'
})
export class ProductosBackService {

  constructor(
    private http: HttpClient
  ) { }

  URL_API_PRODUCTOS = "http://localhost:8080/productos"



  //GET PRODUCTOS PARA LISTADO (activos)
  public getProductosActivos(): Observable<any> {
    return this.http.get(this.URL_API_PRODUCTOS + "/activos");
  }

  //GET PRODUCTOS PARA LISTADO (eliminados)
  public getProductosEliminados(): Observable<any> {
    return this.http.get(this.URL_API_PRODUCTOS + "/eliminados");
  }

  //GET PRODUCTO by ID
  public getProductoById(id: number): Observable<any> {
    return this.http.get(this.URL_API_PRODUCTOS + "/" + id)
  }

  //GET PRODUCTOS by CATEGORIA
  public getProductosByCategoria(idCategoria: number): Observable<any> {
    return this.http.get(this.URL_API_PRODUCTOS + "/categorias/" + idCategoria)
  }

  //DELETE PRODUCTO
  public deleteProducto(id: number): Observable<any> {
    return this.http.delete(this.URL_API_PRODUCTOS + "/" + id);
  }

  // DAR ALTA
  public darAltaProducto(id: number): Observable<any> {
    return this.http.put(this.URL_API_PRODUCTOS + "/alta/" + id, null, { observe: 'response', responseType: 'text' })
  }

  // POST
  public createProducto(prod: ProductosFormDTO): Observable<any> {
    return this.http.post(this.URL_API_PRODUCTOS, prod, { observe: 'response', responseType: 'text' })
  }

  //PUT
  public actualizarProducto(id: number, prodDTO: ProductosFormDTO): Observable<any> {
    return this.http.put(this.URL_API_PRODUCTOS + "/" + id, prodDTO, { observe: 'response', responseType: 'text' })
  }


  URL_API_CATEGORIAS = "http://localhost:8080/categorias"

  // GET ALL activas
  public buscarCategorias(): Observable<any> {
    return this.http.get(this.URL_API_CATEGORIAS);
  }

  // GET TODAS TODAS
  public buscarCategoriasTodas(): Observable<any> {
    return this.http.get(this.URL_API_CATEGORIAS+"/todas");
  }

  //GET by ID
  public buscarCategoriaPorId(id: number): Observable<any> {
    return this.http.get(this.URL_API_CATEGORIAS + "/" + id)
  }

  // POST 
  public crearCategoria(categoria: any): Observable<any> {
    return this.http.post(this.URL_API_CATEGORIAS, categoria, { observe: 'response', responseType: 'text' })
  }

  //DELETE
  public eliminarCategoria(id: number): Observable<any> {
    return this.http.delete(this.URL_API_CATEGORIAS + "/" + id, { observe: 'response', responseType: 'text' })
  }

  //PUT
  public modificarCategoria(id: number, categoria: any): Observable<any> {
    return this.http.put(this.URL_API_CATEGORIAS + "/" + id, categoria, { observe: 'response', responseType: 'text' })
  }

  //ALTA
  public altaCategoria(id: number): Observable<any> {
    return this.http.put(this.URL_API_CATEGORIAS + "/alta/" + id, null,{ observe: 'response', responseType: 'text' })
  }



}
