import { Component, OnInit } from '@angular/core';
import { ProveedoresService } from '../../../services/proveedores.service';
import { Proveedores } from '../../../interfaces/Proveedores';
import { Router } from '@angular/router';
import { ProveedoresListDTO } from '../../../interfaces/ProveedoresListDTO';
import { ProveedoresBackService } from '../../../services/proveedores-back.service';
import { NgModule } from '@angular/core';
import { FiltroRazonSocialProveedorPipe } from '../../../pipes/filtro-razon-social-proveedor.pipe';

import Swal from 'sweetalert2'


@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent implements OnInit {

  constructor(
    public proveedoresService: ProveedoresService,
    public router: Router,
    private proveedoresBackServicio: ProveedoresBackService
  ) { }

  proveedores: Proveedores[] = [];

  //- Cosas Nuevas -//
  proveedoresDTO: ProveedoresListDTO[] = [];
  rubros: any[] = [];

  rubroFiltro: string = "Activos";

  filtroRazonSocial: string = '';

  //----------------//
  ngOnInit(): void {
    this.getProveedoresActivosAndRubros();
/*     this.proveedoresBackServicio.getProveedoresListActivos().subscribe(proves => {
      this.proveedoresDTO = proves;
    })

    this.proveedoresBackServicio.getRubros().subscribe(rubros => {
      this.rubros = rubros;
    }) */
  }

  public getProveedoresActivosAndRubros()  {
    this.proveedoresBackServicio.getProveedoresListActivos().subscribe(proves => {
      this.proveedoresDTO = proves;
    });
    this.proveedoresBackServicio.getRubros().subscribe(rubros => {
      this.rubros = rubros;
    });
  }

  eliminarProveedor(id: number): void {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    });
    swalWithBootstrapButtons
      .fire({
        title: '¿Desea eliminar el Proveedor?',
        text: 'Podrá revertir esto.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sí, eliminarlo',
        cancelButtonText: 'No, cancelar',
        reverseButtons: true
      })
      .then((result) => {
        if (result.isConfirmed) {
          this.proveedoresBackServicio.darBajaProveedor(id).subscribe((msj) => {
            console.log(msj);
            this.getProveedoresActivosAndRubros();
          });
          this.ngOnInit();
          this.rubroFiltro = "Activos"
          swalWithBootstrapButtons.fire({
            title: 'Eliminado',
            text: 'El proveedor ha sido eliminado.',
            icon: 'success'
          });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire({
            title: 'Cancelado',
            text: 'Su proveedor está a salvo :)',
            icon: 'error'
          });
        }
      });
  }


  modificarProveedor(id: any) {
    this.router.navigate(['/proveedores/modificar-proveedor/', id])
  }

  onFiltroChange() {
    if (this.rubroFiltro === "Activos") {
      this.proveedoresBackServicio.getProveedoresListActivos().subscribe(provesAct => {
        this.proveedoresDTO = provesAct;
        console.log(provesAct)
      });
    } else if (this.rubroFiltro === "Eliminados") {
      this.proveedoresBackServicio.getProveedoresListEliminados().subscribe(provesEli => {
        this.proveedoresDTO = provesEli;
        console.log(provesEli);
      });
    } else if (this.rubroFiltro === "Todos") {
      // Aquí combina los proveedores activos y eliminados
      this.proveedoresBackServicio.getProveedoresListActivos().subscribe(provesAct => {
        const proveedoresActivos = provesAct;
        this.proveedoresBackServicio.getProveedoresListEliminados().subscribe(provesEli => {
          const proveedoresEliminados = provesEli;
          // Combina los arrays de activos y eliminados
          this.proveedoresDTO = proveedoresActivos.concat(proveedoresEliminados);
        });
      });
    }
  }

  darDeAltaProveedor(idProveedor: number) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    });
    swalWithBootstrapButtons
      .fire({
        title: '¿Estás seguro?',
        text: 'Esto restaurará al proveedor.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sí, restaurar',
        cancelButtonText: 'No, cancelar',
        reverseButtons: true
      })
      .then((result) => {
        if (result.isConfirmed) {
          this.proveedoresBackServicio.darAltaProveedor(idProveedor).subscribe((msj) => {
            console.log(msj);
            this.getProveedoresActivosAndRubros();
          });
          this.ngOnInit();
          this.rubroFiltro = "Activos"
          swalWithBootstrapButtons.fire({
            title: 'Restaurado',
            text: 'El proveedor ha sido restaurado.',
            icon: 'success'
          });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire({
            title: 'Cancelado',
            text: 'El proveedor permanece inactivo.',
            icon: 'error'
          });
        }
      });

  }

  verDetalleProveedor(idProveedor: any) {
    this.router.navigate(['/proveedores/detalle-proveedor/', idProveedor])
  }

  esFilaVacia(): boolean {
    return this.proveedoresDTO.length === 0 ||
      (this.proveedoresDTO.length === 1 && 'mensaje' in this.proveedoresDTO[0]);
  }

}
