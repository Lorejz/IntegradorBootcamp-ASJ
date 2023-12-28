import { Component, OnInit } from '@angular/core';
import { OrdenesDeCompraService } from '../../../services/ordenes-de-compra.service';
import { OrdenCompra } from '../../../interfaces/OrdenCompra';

@Component({
  selector: 'app-orden-lista',
  templateUrl: './orden-lista.component.html',
  styleUrl: './orden-lista.component.css'
})
export class OrdenListaComponent implements OnInit{

  constructor ( public ordenesServicio : OrdenesDeCompraService ) {}

  ordenesArray : OrdenCompra[] = [];

  ngOnInit(): void {
    this.ordenesArray = this.ordenesServicio.getOrdenes();
  }

}
