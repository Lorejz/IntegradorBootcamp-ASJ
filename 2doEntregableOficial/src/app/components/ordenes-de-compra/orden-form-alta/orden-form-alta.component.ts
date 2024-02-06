import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProveedoresService } from '../../../services/proveedores.service';
import { Proveedores } from '../../../interfaces/Proveedores';
import { ProductosService } from '../../../services/productos.service';
import { Productos } from '../../../interfaces/Productos';
import { OrdenCompra, ProductosCantidad } from '../../../interfaces/OrdenCompra';
import { OrdenesDeCompraService } from '../../../services/ordenes-de-compra.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProveedoresBackService } from '../../../services/proveedores-back.service';
import { ProductosBackService } from '../../../services/productos-back.service';
import { ProveedoresListDTO } from '../../../interfaces/ProveedoresListDTO';
import { ProductosListDTO } from '../../../interfaces/ProductosListDTO';
import { OrdenesBackService } from '../../../services/ordenes-back.service';
import { OrdenDetalleCreateDTO } from '../../../interfaces/OrdenDetalleCreateDTO';
import { OrdenCreateDTO } from '../../../interfaces/OrdenCreateDTO';

@Component({
  selector: 'app-orden-form-alta',
  templateUrl: './orden-form-alta.component.html',
  styleUrl: './orden-form-alta.component.css'
})
export class OrdenFormAltaComponent implements OnInit {

  constructor(
    public proveedoresServicio: ProveedoresService,
    public productosServicio: ProductosService,
    public ordenesServicio: OrdenesDeCompraService,
    private proveedoresBackServicio: ProveedoresBackService,
    private productosBackServicio: ProductosBackService,
    private ordenesBackServicio: OrdenesBackService,
    public router: Router,
    public route: ActivatedRoute
  ) { }

  alertaSucces: boolean = false;
  alertaWarning: boolean = false;
  alertaWarningDetalle: boolean = false;

  //objeto q sera utilizado para ngModel en el html
  ordenNG: OrdenCompra = {
    numOrdenCompra: '',
    fechaEmision: null,
    fechaEntregaEsperada: null,
    direccion: {
      calle: '',
      numero: '',
      codPostal: null
    },
    idProveedor: '',
    razonSocialProveedor: '',
    montoTotal: null,
    productos: [{
      codSKU: '',
      nombreProducto: '',
      cantidad: null,
      montoDetalle: null,
    }],
    descripcionOrden: '',
    estado: "Pendiente"
  }

  codProductoOrden: number | null = null;
  cantProducto: number | null = null;

  campoModificable: boolean = true; //cancela la modificacion de campo proveedor cuando ya se agrego un producto

  numOrdenCompra: any = ''; //utilizado para el route

  estadoFormAlta: boolean = true;
  estadoFormModificar: boolean = false;

  proveedores: Proveedores[] = []; //array de todos los proveedores para el select
  productosProveedor: Productos[] = []; //array con productos del proveedor seleccionado
  ordenDetalle: ProductosCantidad[] = []; //array con el detalle de los productos

  //cosas nuevas

  codigoOrden: number | null = null;
  codProveedor: number | null = null;
  proveedoresDTO: ProveedoresListDTO[] = []
  ProductosProvDTO: ProductosListDTO[] = [];

  ordenDetalleDTO: OrdenDetalleCreateDTO[] = [];

  logoProveedorSeleccionado: String | undefined = "https://cdn.pixabay.com/animation/2023/03/20/02/45/02-45-27-186_512.gif";


  fechaEmisionSeleccionada: Date | null = null;
  actualizarFechaEmision() {
    this.fechaEmisionSeleccionada = this.ordenNG.fechaEmision;
  }

  //---------------

  ngOnInit(): void {
    //this.proveedores = this.proveedoresServicio.getProveedores();
    this.proveedoresBackServicio.getProveedoresListActivos().subscribe(data => {
      this.proveedoresDTO = data;
    })

    this.route.paramMap.subscribe(params => {
      this.numOrdenCompra = params.get('numOrdenCompra');
    })
    //logica modificacion orden
    if (this.numOrdenCompra !== null) {
      this.estadoFormAlta = false; //se pasa false, es modificacion
      this.estadoFormModificar = true;
      this.ordenNG = this.ordenesServicio.getOrdenById(this.numOrdenCompra);
      this.ordenDetalle = this.ordenNG.productos;
      this.buscarProductosProveedor();
      this.campoModificable = true;
    }
  }

  buscarProductosProveedor() {
    if (this.codProveedor) {
      this.productosBackServicio.getProductosByProveedor(this.codProveedor).subscribe(prod => {
        this.ProductosProvDTO = prod;
      })
    }
  }

  crearOrdenCabecera(miFormCab: NgForm) {
    if (this.estadoFormAlta == true && this.estadoFormModificar == false) { //estado ALTA
      if (
        miFormCab.value.fechaEmisionOrd == null ||
        miFormCab.value.fechaEntregaEspOrd == null
      ) {
        this.alertaWarning = true
        console.log('error falta algun campo')
        return;
      }
      if (this.ordenDetalleDTO.length === 0) {
        this.alertaWarningDetalle = true;
        console.log('Error: Debe agregar al menos un producto al detalle');
        return; // Detener la ejecución si hay un error
      }
      if (
        miFormCab.value.fechaEmisionOrd !== null &&
        miFormCab.value.fechaEntregaEspOrd !== null
      ) {
        console.log('joya entro bien todos campos ok')
        const ordenDTO : OrdenCreateDTO = {
          idProveedor : Number(this.codProveedor),
          fechaEmisionOrden : miFormCab.value.fechaEmisionOrd,
          fechaEntregaOrden : miFormCab.value.fechaEntregaEspOrd,
          infoOrden : miFormCab.value.descripcionOrd,
          numeroOrden : this.codigoOrden,
          montoTotalOrden : this.calcularSubtotal()
        }
/*         const orden: OrdenCompra = {
          numOrdenCompra: this.ordenNG.numOrdenCompra,
          fechaEmision: miFormCab.value.fechaEmisionOrd,
          fechaEntregaEsperada: miFormCab.value.fechaEntregaEspOrd,
          direccion: {
            calle: miFormCab.value.calleDirec,
            numero: miFormCab.value.numeroDirec,
            codPostal: miFormCab.value.codPostalDirec,
          },
          idProveedor: miFormCab.value.codProvOrd,
          razonSocialProveedor: proveedor.razonSocial,
          productos: this.ordenDetalle,
          descripcionOrden: miFormCab.value.descripcionOrd,
          estado: "Pendiente",
          montoTotal: this.calcularSubtotal(),
        } */
        let confirmacion = confirm('¿Desea crear la Orden de Compra?')
        if (confirmacion) {
          //this.ordenesServicio.addOrden(orden);
          console.log(ordenDTO);
          console.log(this.ordenDetalleDTO);
          this.ordenesBackServicio.crearOrden(ordenDTO,this.ordenDetalleDTO).subscribe( msj => {
            console.log(msj);
          } )
          miFormCab.reset()
          this.alertaSucces = true;
          this.alertaWarning = false;
          this.alertaWarningDetalle = false;
          this.campoModificable = true; //volver a hacer modificable el proveedor por si qiere cargar otra orden
          //this.ordenDetalle = [];
          //hacer logica para que lo devuelva al listado de las ordenes de compra
          this.router.navigate(['/ordenes-de-compra']);
        }
      } else {
        console.log('falta algun campo')
        this.alertaWarning = true;
      }
    }
    if (this.estadoFormModificar == true && this.estadoFormAlta == false) { //estado MODIFICACION
      if (
        miFormCab.value.fechaEmisionOrd == null ||
        miFormCab.value.fechaEntregaEspOrd == null ||
        miFormCab.value.calleDirec == '' ||
        miFormCab.value.numeroDirec == '' ||
        miFormCab.value.codPostalDirec == ''
      ) {
        this.alertaWarning = true
        console.log('error falta algun campo')
        return;
      }
      if (this.ordenDetalle.length === 0) {
        this.alertaWarningDetalle = true;
        console.log('Error: Debe agregar al menos un producto al detalle');
        return; // Detener la ejecución si hay un error
      }
      if (
        miFormCab.value.fechaEmisionOrd !== null &&
        miFormCab.value.fechaEntregaEspOrd !== null &&
        miFormCab.value.calleDirec !== '' &&
        miFormCab.value.numeroDirec !== '' &&
        miFormCab.value.codPostalDirec !== null
      ) {
        console.log('joya entro bien todos campos ok')
        const proveedor = this.proveedoresServicio.getProveedorByid(miFormCab.value.codProvOrd);
        const orden: OrdenCompra = {
          numOrdenCompra: this.ordenNG.numOrdenCompra,
          fechaEmision: miFormCab.value.fechaEmisionOrd,
          fechaEntregaEsperada: miFormCab.value.fechaEntregaEspOrd,
          direccion: {
            calle: miFormCab.value.calleDirec,
            numero: miFormCab.value.numeroDirec,
            codPostal: miFormCab.value.codPostalDirec,
          },
          idProveedor: miFormCab.value.codProvOrd,
          razonSocialProveedor: proveedor.razonSocial,
          productos: this.ordenDetalle,
          descripcionOrden: miFormCab.value.descripcionOrd,
          estado: "Pendiente",
          montoTotal: this.calcularSubtotal(),
        }
        let confirmacion = confirm('¿Desea modificar la Orden de Compra?')
        if (confirmacion) {
          this.ordenesServicio.updateOrden(orden);
          miFormCab.reset()
          this.alertaSucces = true;
          this.alertaWarning = false;
          this.alertaWarningDetalle = false;
          this.campoModificable = true; //volver a hacer modificable el proveedor por si qiere cargar otra orden
          this.ordenDetalle = [];
          //hacer logica para que lo devuelva al listado de las ordenes de compra
          this.router.navigate(['/ordenes-de-compra']);
        }
      } else {
        console.log('falta algun campo')
        this.alertaWarning = true;
      }
    }
  }



  crearOrdenDetalle() {
    if (this.codigoOrden !== null && this.codProveedor !== null) {
      this.campoModificable = false; // hace que el proveedor no se pueda modificar
      console.log('entro a crear el detalle');
      if (this.codProductoOrden) {
        this.productosBackServicio.getProductoById(this.codProductoOrden).subscribe(prod => {
          const producto = prod;

          const index = this.ordenDetalleDTO.findIndex(detalle => detalle.idProducto === this.codProductoOrden);
          if (this.cantProducto) {


            const detalleDTO: OrdenDetalleCreateDTO = {
              idProducto: this.codProductoOrden,
              cantOrdenDetalle: this.cantProducto,
              precioUniOrdenDetalle: producto.precioProducto,

              codSKU: producto.skuProducto,
              montoDetalle: producto.precioProducto * this.cantProducto,
              nombreProducto: producto.nombreProducto
            };

            if (index !== -1) {
              const detalleExistente = this.ordenDetalleDTO[index];
              if (detalleExistente.cantOrdenDetalle && detalleExistente.montoDetalle && this.cantProducto && detalleDTO.montoDetalle) {
                // Si el producto ya existe en los detalles, actualiza la cantidad y el monto
                detalleExistente.cantOrdenDetalle += this.cantProducto;
                detalleExistente.montoDetalle += detalleDTO.montoDetalle;
              } else {
                console.error('El detalle de orden en la posición index es nulo.');
                // Puedes manejar esta situación de alguna manera, por ejemplo, mostrando un mensaje de error.
              }
            } else {
              // Si el producto no existe en los detalles, agrégalo
              this.ordenDetalleDTO.push(detalleDTO);
            }
            console.log(this.ordenDetalleDTO)
          }
          // Aquí puedes hacer algo con el detalleDTO si es necesario, como enviarlo a un servicio.

          this.codProductoOrden = null;
          this.cantProducto = null;
        });
      }
    }
  }




  calcularSubtotal(): number {
    return this.ordenDetalleDTO.reduce((total, od) => total + (od.montoDetalle || 0), 0);
  }

  eliminarDetalle(idProducto: any) {
    const index = this.ordenDetalleDTO.findIndex(detalle => detalle.idProducto === idProducto);
    if (index !== -1) {
      this.ordenDetalleDTO.splice(index, 1);
      console.log(`Detalle con idProducto ${idProducto} eliminado.`);
    } else {
      console.warn(`No se encontró un detalle con idProducto ${idProducto}.`);
      // Puedes manejar esta situación de alguna manera, por ejemplo, mostrando un mensaje de advertencia.
    }
  }


  // Función para generar un código alfanumérico aleatorio de longitud dada
  generarCodigoAlfanumerico(longitud: number): string {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let codigo = '';
    for (let i = 0; i < longitud; i++) {
      const indice = Math.floor(Math.random() * caracteres.length);
      codigo += caracteres.charAt(indice);
    }
    return codigo;
  };

  onProveedorChange() {
    if (this.codProveedor) {
      this.proveedoresBackServicio.getProveedorFormDTO(this.codProveedor).subscribe(data => {
        this.logoProveedorSeleccionado = data.logoProveedor;
      })
    }
  }

  generarCodOrden() {
    if (this.codProveedor) {
      this.ordenesBackServicio.getCodigoOrden(this.codProveedor).subscribe(num => {
        this.codigoOrden = num;
      })
    }
  }


}
