import { Component, OnInit } from '@angular/core';
import { OrdenesDeCompraService } from '../../../services/ordenes-de-compra.service';
import { OrdenCompra } from '../../../interfaces/OrdenCompra';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orden-lista',
  templateUrl: './orden-lista.component.html',
  styleUrl: './orden-lista.component.css'
})
export class OrdenListaComponent implements OnInit{

  constructor ( public ordenesServicio : OrdenesDeCompraService, public router : Router ) {}

  ordenesArray : OrdenCompra[] = [];

  ngOnInit(): void {
    this.ordenesArray = this.ordenesServicio.getOrdenes();
  }


  public modificarOrden(numOrdenCompra: string) {
    this.router.navigate(['/ordenes-de-compra/modificar-orden-de-compra/',numOrdenCompra])
  }
}
