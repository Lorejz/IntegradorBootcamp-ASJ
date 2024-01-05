import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProveedoresService } from '../../../services/proveedores.service';
import { Proveedores } from '../../../interfaces/Proveedores';
import { ProductosService } from '../../../services/productos.service';
import { Productos } from '../../../interfaces/Productos';
import { OrdenCompra, ProductosCantidad } from '../../../interfaces/OrdenCompra';
import { OrdenesDeCompraService } from '../../../services/ordenes-de-compra.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-orden-form-alta',
  templateUrl: './orden-form-alta.component.html',
  styleUrl: './orden-form-alta.component.css'
})
export class OrdenFormAltaComponent implements OnInit {

  constructor(public proveedoresServicio : ProveedoresService,
      public productosServicio : ProductosService,
      public ordenesServicio : OrdenesDeCompraService,
      public router : Router,
      public route : ActivatedRoute) { }

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

  codProductoOrden = '';
  cantProducto: number | null = null;

  campoModificable: boolean = true; //cancela la modificacion de campo proveedor cuando ya se agrego un producto

  numOrdenCompra : any = ''; //utilizado para el route

  proveedores: Proveedores[] = []; //array de todos los proveedores para el select
  productosProveedor: Productos[] = []; //array con productos del proveedor seleccionado
  ordenDetalle: ProductosCantidad[] = []; //array con el detalle de los productos

  ngOnInit(): void {
    this.proveedores = this.proveedoresServicio.getProveedores();

    this.route.paramMap.subscribe(params => {
      this.numOrdenCompra = params.get('numOrdenCompra');
    })
    //logica modificacion orden
  }

  //carga productos del proveedor seleccionado
  buscarProductosProveedor() {
    console.log('entro a funcion buscarProductosProveedor()')
    console.log('codigo proveedor' + this.ordenNG.idProveedor)
    this.productosProveedor = this.productosServicio.getProductosByProveedor(this.ordenNG.idProveedor);
    console.log(this.productosProveedor);
  }

  crearOrdenCabecera(miFormCab: NgForm) {
    console.log(miFormCab.value)
    console.log(miFormCab.value.codPostalDirec)
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
      let confirmacion = confirm('¿Desea crear la Orden de Compra?')
      if (confirmacion) {
        this.ordenesServicio.addOrden(orden);
        miFormCab.reset()
        this.alertaSucces = true;
        this.alertaWarning = false;
        this.alertaWarningDetalle = false;
        this.campoModificable = true; //volver a hacer modificable el proveedor por si qiere cargar otra orden
        this.ordenDetalle = [];
        //hacer logica para que lo devuelva al listado de las ordenes de compra
        this.router.navigate(['/ordenes-de-compra']);
      }
    }else{
      console.log('falta algun campo')
      this.alertaWarning = true;
    }
  }


  crearOrdenDetalle() {
    if (this.ordenNG.numOrdenCompra == '' && this.ordenNG.idProveedor !== '') {
      console.log('entro a crear codigo de orden')
      this.ordenNG.numOrdenCompra = this.ordenNG.idProveedor + '-' + this.generarCodigoAlfanumerico(3);
      console.log(this.ordenNG.numOrdenCompra)
    }
    if (this.ordenNG.numOrdenCompra !== '' && this.ordenNG.idProveedor !== '') {
      this.campoModificable = false; //hace q el proveedor no se pueda modificar
      console.log('entro a crear el detalle')
      const producto = this.productosServicio.getProductoBySKU(this.codProductoOrden);
      if (producto.precio !== null && this.cantProducto !== null) {
        const index = this.ordenDetalle.findIndex(detalle => detalle.codSKU === this.codProductoOrden);
        if (index !== -1) {
          this.ordenDetalle[index].cantidad = Number(this.ordenDetalle[index].cantidad) + Number(this.cantProducto);
          this.ordenDetalle[index].montoDetalle! += producto.precio * this.cantProducto;
        } else {
          const detalleProducto: ProductosCantidad = {
            codSKU: this.codProductoOrden,
            nombreProducto: producto.nombre,
            cantidad: this.cantProducto,
            montoDetalle: (producto.precio * this.cantProducto)
          }
          this.ordenDetalle.push(detalleProducto);
        }
        this.codProductoOrden = '';
        this.cantProducto = null;
      }
    }
  }


  calcularSubtotal(): number {
    return this.ordenDetalle.reduce((total, od) => total + (od.montoDetalle || 0), 0);
  }
  eliminarDetalle(codSKU : string) {
    this.ordenDetalle = this.ordenDetalle.filter(detalle => detalle.codSKU !== codSKU);
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


}
