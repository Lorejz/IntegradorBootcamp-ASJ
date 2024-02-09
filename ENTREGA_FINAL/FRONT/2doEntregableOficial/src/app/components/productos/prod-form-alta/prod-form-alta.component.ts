import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProveedoresService } from '../../../services/proveedores.service';
import { Proveedores } from '../../../interfaces/Proveedores';
import proveedores from '../../../data/proveedores';
import { Productos } from '../../../interfaces/Productos';
import { ProductosService } from '../../../services/productos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductosFormDTO } from '../../../interfaces/ProductosFormDTO';
import { ProveedoresListDTO } from '../../../interfaces/ProveedoresListDTO';
import { ProveedoresBackService } from '../../../services/proveedores-back.service';
import { ProductosBackService } from '../../../services/productos-back.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-prod-form-alta',
  templateUrl: './prod-form-alta.component.html',
  styleUrl: './prod-form-alta.component.css'
})
export class ProdFormAltaComponent implements OnInit {

  constructor(
    public proveedoresServicio: ProveedoresService,
    public productosServicio: ProductosService,
    private proveedoresBackService : ProveedoresBackService,
    private productosBackService : ProductosBackService,
    public route: ActivatedRoute,
    public router: Router
    ) { }

  alertaSucces: boolean = false;
  alertaWarning: boolean = false;

  estadoFormAlta: boolean = true;
  estadoFormModificar: boolean = false;

  proveedores: Proveedores[] = [];
  id: any = ''; //utilizado en el routing, para modificar
  //cosas nuevas

  proveedoresDTO : ProveedoresListDTO[]= [];
  categorias : any[] = [];

  productoDTO : ProductosFormDTO = {
    skuProducto : "",
    idCategoria : null,
    idProveedor : null,
    nombreProducto : "",
    imagenProducto : "",
    descProducto : "",
    precioProducto : null
  }

  logoProveedorSeleccionado : String | undefined = "https://cdn.pixabay.com/animation/2023/03/20/02/45/02-45-27-186_512.gif";

  //------------------

  ngOnInit(): void {
    /* this.proveedores = this.proveedoresServicio.getProveedores(); */
    this.proveedoresBackService.getProveedoresListActivos().subscribe( data => {
      this.proveedoresDTO = data;
    } )
    this.productosBackService.buscarCategorias().subscribe( data => {
      this.categorias = data;
    })

    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
    })

    if (this.id !== null) {
      console.log('hay sku de producto, a modificar')
      this.estadoFormAlta = false; //al estar en false, no entra a la logica de creacion del submit de la funcion 'crearProveedor()'
      this.estadoFormModificar = true;

      this.productosBackService.getProductoById(this.id).subscribe( producto => {
        this.productoDTO = producto;
        if(this.productoDTO.idProveedor != null) {
          this.proveedoresBackService.getProveedorFormDTO(this.productoDTO.idProveedor).subscribe( prov => {
            this.logoProveedorSeleccionado = prov.logoProveedor;
          })
        }
      })



    } else {
      console.log('no hay sku, es un producto nuevo')
    }
  }

  crearProducto(miForm: NgForm) {
    if (this.estadoFormAlta == true && this.estadoFormModificar == false) { // estado ALTA
      if (!miForm.valid) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Verifica que la informacion sea válida!"
        });
        this.alertaWarning = true;
      } else {
        this.productosBackService.verificarSKUProducto(miForm.value.skuProducto).subscribe( estado => {
          if(estado){
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "¡El SKU Producto que ingresaste ya existe!"
            });
          }else{
            const  newProductoDTO : ProductosFormDTO = {
              skuProducto : miForm.value.skuProducto ,
              idCategoria :  miForm.value.idCategoria ,
              idProveedor :  miForm.value.idProveedor ,
              nombreProducto : miForm.value.nombreProducto ,
              imagenProducto : miForm.value.imagenProducto ,
              descProducto : miForm.value.descProducto ,
              precioProducto :  miForm.value.precioProducto 
            }
            console.log(newProductoDTO);
            this.productosBackService.createProducto(newProductoDTO).subscribe( msj => {
              console.log(msj);
              this.router.navigate(['/proveedores']);
              this.router.navigate(['/productos']);
              miForm.reset();
              this.alertaSucces = true;
              this.alertaWarning = false;
            })
            Swal.fire({
              title: "Producto Cargado",
              text: "El producto se ha cargado correctamente.",
              icon: "success"
            });
          }
        });
        
      }
    }
    if(this.estadoFormModificar == true && this.estadoFormAlta == false ){ // ESTADO MODIFICACION
      if (!miForm.valid) {
        this.alertaWarning = true;
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Verifica que la informacion sea válida!"
        });
      } else {
        const  modProductoDTO : ProductosFormDTO = {
          skuProducto : miForm.value.skuProducto ,
          idCategoria :  miForm.value.idCategoria ,
          idProveedor :  miForm.value.idProveedor ,
          nombreProducto : miForm.value.nombreProducto ,
          imagenProducto : miForm.value.imagenProducto ,
          descProducto : miForm.value.descProducto ,
          precioProducto :  miForm.value.precioProducto 
        }
        const swalWithBootstrapButtons = Swal.mixin({
          customClass: {
            confirmButton: "btn btn-success",
            cancelButton: "btn btn-danger"
          },
          buttonsStyling: false
        });
        
        swalWithBootstrapButtons.fire({
          title: "¿Desea modificar los datos del Producto?",
          text: "Podrá revertir esto.",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Sí, modificarlo",
          cancelButtonText: "No, cancelar",
          reverseButtons: true
        }).then((result) => {
          if (result.isConfirmed) {
            // Lógica para modificar el producto
            this.productosBackService.actualizarProducto(this.id, modProductoDTO).subscribe({
              next: (msj) => {
                console.log(msj);
                this.router.navigate(['/proveedores']);
                this.router.navigate(['/productos']);
                miForm.reset();
                this.alertaSucces = true;
                this.alertaWarning = false;
              },
              error: (error) => {
                console.error('Error al actualizar el producto:', error);
                Swal.fire({
                  icon: 'error',
                  title: 'Error',
                  text: 'El codigo SKU que tratas de ingresar ya existe!',
                });
              }
            });
          } else if (result.dismiss === Swal.DismissReason.cancel) {
            swalWithBootstrapButtons.fire({
              title: "Cancelado",
              text: "Los datos del producto no han sido modificados.",
              icon: "error"
            });
          }
        });
      }
    }
  }

  onProveedorSeleccionado(id : any) {
    // Obtener el proveedor seleccionado
    this.proveedoresBackService.getProveedorFormDTO(id).subscribe( data => {
      this.logoProveedorSeleccionado = data.logoProveedor;
    })
  }




  
}
