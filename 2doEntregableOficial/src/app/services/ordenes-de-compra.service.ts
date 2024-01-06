import { Injectable } from '@angular/core';
import { OrdenCompra } from '../interfaces/OrdenCompra';

@Injectable({
  providedIn: 'root'
})
export class OrdenesDeCompraService {

  constructor() { }

  arrayOrdenes : OrdenCompra[] = [];


public getOrdenes(){
  return this.arrayOrdenes;
}

public addOrden(orden:OrdenCompra){
  this.arrayOrdenes.push(orden);
}

public getOrdenById(numOrdenCompra:string){
const orden = this.arrayOrdenes.filter( (orden) => {
  return orden.numOrdenCompra == numOrdenCompra;
})
return orden[0];
}

public updateOrden (o:OrdenCompra) {
  let indice = this.arrayOrdenes.findIndex( orden => orden.numOrdenCompra == o.numOrdenCompra )
  this.arrayOrdenes[indice] = o;
}



}
