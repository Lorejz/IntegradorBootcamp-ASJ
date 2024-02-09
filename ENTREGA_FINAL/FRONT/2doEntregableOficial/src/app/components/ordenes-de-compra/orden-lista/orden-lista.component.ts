import { Component, OnInit } from '@angular/core';
import { OrdenesDeCompraService } from '../../../services/ordenes-de-compra.service';
import { OrdenCompra } from '../../../interfaces/OrdenCompra';
import { Router } from '@angular/router';
import { OrdenesBackService } from '../../../services/ordenes-back.service';
import { OrdenListDTO } from '../../../interfaces/OrdenListDTO';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-orden-lista',
  templateUrl: './orden-lista.component.html',
  styleUrl: './orden-lista.component.css'
})
export class OrdenListaComponent implements OnInit {

  constructor(
    public ordenesServicio: OrdenesDeCompraService,
    public router: Router,
    private ordenesBackServicio: OrdenesBackService
  ) { }

  ordenesArray: OrdenCompra[] = [];
  orden: OrdenCompra | null = null;

  ordenesList: OrdenListDTO[] = [];

  filtro: String = "Activas";
  

  ngOnInit(): void {
    this.onFiltroChange();
  }

  formatearFecha(fecha: Date): string {
    return fecha.toISOString().split('T')[0];
  }


  public cancelarOrden(idOrden: any): void {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    });

    swalWithBootstrapButtons
      .fire({
        title: '¿Desea cancelar la Orden?',
        text: 'No podra revertir esta acción.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sí, cancelarla',
        cancelButtonText: 'No, mantenerla',
        reverseButtons: true
      })
      .then((result) => {
        if (result.isConfirmed) {
          this.ordenesBackServicio.cancelOrden(idOrden).subscribe((response) => {
            console.log(response);
            this.actualizarListaOrdenes();
          });
          swalWithBootstrapButtons.fire({
            title: 'Orden Cancelada',
            text: 'La orden ha sido cancelada exitosamente.',
            icon: 'success'
          });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire({
            title: 'Cancelado',
            text: 'Su orden está a salvo :)',
            icon: 'error'
          });
        }
      });
  }

  verDetalleOrden(idOrden: any) {
    this.router.navigate(['/ordenes-de-compra/detalle-orden/', idOrden])
  }


  public actualizarListaOrdenes(): void {
    this.ordenesBackServicio.getListOrdenesActivas().subscribe((ordenes: any[]) => {
      this.ordenesList = ordenes.map(orden => ({
        ...orden,
        fechaEmisionOrden: this.formatearFecha(new Date(orden.fechaEmisionOrden)),
        fechaEntregaOrden: this.formatearFecha(new Date(orden.fechaEntregaOrden))
      }));
    });
  }

  public obtenerClaseFila(estado: String): string {
    return estado === 'Cancelada' ? 'fila-cancelada' : '';
  }


  onFiltroChange() {
    if (this.filtro === "Activas") {
      this.ordenesBackServicio.getListOrdenesActivas().subscribe((ordenes: any[]) => {
        this.ordenesList = ordenes.map(orden => ({
          ...orden,
          fechaEmisionOrden: this.formatearFecha(new Date(orden.fechaEmisionOrden)),
          fechaEntregaOrden: this.formatearFecha(new Date(orden.fechaEntregaOrden))
        }));
      });
    }
    if (this.filtro === "Canceladas") {
      this.ordenesBackServicio.getListOrdenesCanceladas().subscribe((ordenes: any[]) => {
        this.ordenesList = ordenes.map(orden => ({
          ...orden,
          fechaEmisionOrden: this.formatearFecha(new Date(orden.fechaEmisionOrden)),
          fechaEntregaOrden: this.formatearFecha(new Date(orden.fechaEntregaOrden))
        }));
      });
    }
    if (this.filtro === "Todas") {
      this.ordenesBackServicio.getListOrdenesActivas().subscribe((ordenesActivas: any[]) => {
        this.ordenesBackServicio.getListOrdenesCanceladas().subscribe((ordenesCanceladas: any[]) => {
          // Concatenar y ordenar las órdenes
          const todasOrdenes = [...ordenesActivas, ...ordenesCanceladas];
          this.ordenesList = this.formatOrdenes(todasOrdenes);
        });
      });
    }
  }

  formatOrdenes(ordenes: any[]): any[] {
    return ordenes.map(orden => ({
      ...orden,
      fechaEmisionOrden: this.formatearFecha(new Date(orden.fechaEmisionOrden)),
      fechaEntregaOrden: this.formatearFecha(new Date(orden.fechaEntregaOrden))
    }));
  }








}
