import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../../services/productos.service';
import { Productos } from '../../../interfaces/Productos';
import { Router } from '@angular/router';
import { ProductosListDTO } from '../../../interfaces/ProductosListDTO';
import { ProductosBackService } from '../../../services/productos-back.service';
import Swal from 'sweetalert2'
import { FiltroNombreProductoPipe } from '../../../pipes/filtro-nombre-producto.pipe';

@Component({
  selector: 'app-prod-lista',
  templateUrl: './prod-lista.component.html',
  styleUrl: './prod-lista.component.css'
})
export class ProdListaComponent implements OnInit {

  constructor(
    public productosService: ProductosService,
    public router: Router,
    private productosBackService: ProductosBackService
  ) { }

  productos: Productos[] = [];

  //cosas nuevas

  filtro: String = "Activos";
  categoriaFiltro: number = 0;
  productosDTO: ProductosListDTO[] = [];
  categorias: any[] = [];
  filtroNombreProducto: string = "";

  precioFiltro: String = "";
  //------------

  ngOnInit(): void {
    this.productosBackService.getProductosActivos().subscribe(data => {
      this.productosDTO = data;
    });
    this.productosBackService.buscarCategorias().subscribe(data => {
      this.categorias = data;
    })
  }

  /*   public buscarProductosActivos() {
      this.productosBackService.getProductosActivos().subscribe(data => {
        this.productosDTO = data;
      });
    } */

  eliminarProducto(idProducto: any): void {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    });
    swalWithBootstrapButtons
      .fire({
        title: '¿Desea eliminar el Producto?',
        text: 'Podrá revertir esto.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sí, eliminarlo',
        cancelButtonText: 'No, cancelar',
        reverseButtons: true
      })
      .then((result) => {
        if (result.isConfirmed) {
          this.productosBackService.deleteProducto(idProducto).subscribe((msj) => {
            console.log(msj);
          });
          this.productosBackService.getProductosActivos().subscribe((productos) => {
            this.productosDTO = productos;
            this.filtro = "Activos";
            this.onFiltroChange();
          });
          swalWithBootstrapButtons.fire({
            title: 'Eliminado',
            text: 'El producto ha sido eliminado.',
            icon: 'success'
          });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire({
            title: 'Cancelado',
            text: 'Su producto está a salvo :)',
            icon: 'error'
          });
        }
      });
  }

  darDeAltaProducto(idProducto: any): void {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    });
    swalWithBootstrapButtons
      .fire({
        title: '¿Desea dar de alta el Producto?',
        text: 'Podrá revertir esto.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sí, dar de alta',
        cancelButtonText: 'No, cancelar',
        reverseButtons: true
      })
      .then((result) => {
        if (result.isConfirmed) {
          this.productosBackService.darAltaProducto(idProducto).subscribe((msj) => {
            console.log(msj);
          });
          this.productosBackService.getProductosActivos().subscribe((productos) => {
            this.productosDTO = productos;
            this.filtro = "Activos";
            this.onFiltroChange();
          });
          swalWithBootstrapButtons.fire({
            title: 'Producto dado de alta',
            text: 'El producto ha sido dado de alta correctamente.',
            icon: 'success'
          });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire({
            title: 'Cancelado',
            text: 'Su producto sigue inactivo :)',
            icon: 'error'
          });
        }
      });
  }

  modificarProducto(idProducto: any) {
    this.router.navigate(['/productos/modificar-producto/', idProducto])
  }


  
  onFiltroChange() {
    if (this.filtro === "Activos") {
      this.precioFiltro = "";
      this.categoriaFiltro = 0;
      this.productosBackService.getProductosActivos().subscribe(data => {
        this.productosDTO = data;
        //this.categoriaFiltro = null;
      })
    } else if (this.filtro === "Eliminados") {
      this.precioFiltro = "";
      this.categoriaFiltro = 0;
      this.productosBackService.getProductosEliminados().subscribe(data => {
        this.productosDTO = data;
        //this.categoriaFiltro = null;
      })
    } else if (this.filtro === "Todos") {
      this.precioFiltro = "";
      this.categoriaFiltro = 0;
      this.productosBackService.getProductosActivos().subscribe(prodActivos => {
        const productosActivos = prodActivos;
        this.productosBackService.getProductosEliminados().subscribe(prodEliminados => {
          const productosEliminados = prodEliminados
          this.productosDTO = productosActivos.concat(productosEliminados);
          //this.categoriaFiltro = null;
        });
      });
    }
  }

  onFiltroCategoriaChange() {
    if(this.filtro === "Activos") {
      if(this.categoriaFiltro != 0){
        this.productosBackService.getProductosByCategoria(this.categoriaFiltro).subscribe(data => {
          this.productosDTO = data;
        });
      }else{
        this.productosBackService.getProductosActivos().subscribe(data => {
          this.productosDTO = data;
        });
      }
    } else if(this.filtro === "Eliminados") {
      if(this.categoriaFiltro != 0 ){
        this.productosBackService.getProductosByCategoriaEliminados(this.categoriaFiltro).subscribe(data => {
          this.productosDTO = data;
        });
      }else{
        this.productosBackService.getProductosEliminados().subscribe(data => {
          this.productosDTO = data;
        });
      }
    } else if (this.filtro === "Todos") {
      if (this.categoriaFiltro != 0) {
        this.productosBackService.getProductosByCategoria(this.categoriaFiltro).subscribe(data => {
          const productosByCategoria = data;
          if(this.categoriaFiltro) {
            this.productosBackService.getProductosByCategoriaEliminados(this.categoriaFiltro).subscribe(dataEliminados => {
              const productosByCategoriaEliminados = dataEliminados;
              this.productosDTO = productosByCategoria.concat(productosByCategoriaEliminados);
            });
          }
        });
      }else{
        this.productosBackService.getProductosActivos().subscribe(prodActivos => {
          const productosActivos = prodActivos;
          this.productosBackService.getProductosEliminados().subscribe(prodEliminados => {
            const productosEliminados = prodEliminados
            this.productosDTO = productosActivos.concat(productosEliminados);
          });
        });
      }
    }
}




  verDetalleProducto(idProducto: number) {
    this.router.navigate(['/productos/detalle-producto/', idProducto])
  }


  onPrecioFiltroChange() {
    console.log(this.precioFiltro)
    if (this.precioFiltro === 'Menor a Mayor') {
      this.productosDTO.sort((a, b) => {
        if (a.precioProducto && b.precioProducto) {
          return a.precioProducto - b.precioProducto;
        } else {
          return 0;
        }
      });
    } else if (this.precioFiltro === 'Mayor a Menor') {
      this.productosDTO.sort((a, b) => {
        if (a.precioProducto && b.precioProducto) {
          return b.precioProducto - a.precioProducto;
        } else {
          return 0;
        }
      });
    }
  }








}
