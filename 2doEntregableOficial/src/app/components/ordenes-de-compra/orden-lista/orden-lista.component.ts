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

  orden : OrdenCompra | null = null;


  ngOnInit(): void {
    this.ordenesArray = this.ordenesServicio.getOrdenes();
    this.ordenarOrdenesPorEstado();
  }


  public modificarOrden(numOrdenCompra: string) {
    this.router.navigate(['/ordenes-de-compra/modificar-orden-de-compra/',numOrdenCompra])
  }

  public cancelarOrden(numOrdenCompra: string){
    let confirmacion = confirm("¿Desea cancelar la Orden de Compra? #"+numOrdenCompra);
    if (confirmacion){
      this.orden = this.ordenesServicio.getOrdenById(numOrdenCompra);
      this.orden.estado = 'Cancelada';
      this.ordenesServicio.updateOrden(this.orden);
      this.orden = null;
      this.ngOnInit();
    }

  }


  ordenarOrdenesPorEstado(){
    this.ordenesArray.sort((a, b) => {
      // Si ambos tienen el mismo estado, no cambies el orden
      if (a.estado === b.estado) {
        return 0;
      }
      // Ordenar de manera que "Cancelada" vaya después de "Pendiente"
      if (a.estado === "Cancelada") {
        return 1;
      }
    
      // Si no es "Cancelada", va antes
      return -1;
    });

  }



}
