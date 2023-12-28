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





}
