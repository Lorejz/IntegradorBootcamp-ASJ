import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProveedoresService } from '../../../services/proveedores.service';
import { Proveedores } from '../../../interfaces/Proveedores';
import { ProductosService } from '../../../services/productos.service';
import { Productos } from '../../../interfaces/Productos';
import { OrdenCompra, ProductosCantidad } from '../../../interfaces/OrdenCompra';
import { OrdenesDeCompraService } from '../../../services/ordenes-de-compra.service';

@Component({
  selector: 'app-orden-form-alta',
  templateUrl: './orden-form-alta.component.html',
  styleUrl: './orden-form-alta.component.css'
})
export class OrdenFormAltaComponent implements OnInit {

  constructor (public proveedoresServicio : ProveedoresService, public productosServicio : ProductosService, public ordenesServicio : OrdenesDeCompraService) {}

  alertaSucces: boolean = false;
  alertaWarning: boolean = false;

  codigoOrden = '';
  fechaEmisionOrden = '';
  fechaEntregaEspOrden = '';
  codProvOrden = '';
  descripcionOrden = '';

  codProductoOrden = '';
  cantProducto : number = 0;

  calleDireccion = '';
  codPostalDireccion = '';
  numeroDireccion = '';


  proveedores: Proveedores[] = [];
  productosProveedor: Productos[] = []; //array con productos del proveedor seleccionado

  ordenDetalle : ProductosCantidad [] = []; //array con el detalle de los productos

  ngOnInit(): void {
    this.proveedores = this.proveedoresServicio.getProveedores();
  }

  //carga productos del proveedor seleccionado
  buscarProductosProveedor(){
    console.log('entro a funcion buscarProductosProveedor()')
    console.log('codigo proveedor'+this.codProvOrden)
    this.productosProveedor = this.productosServicio.getProductosByProveedor(this.codProvOrden);
    console.log(this.productosProveedor);
  }

  crearOrdenCabecera(miFormCab : NgForm) {
    if (!miFormCab.valid){
      this.alertaWarning = true
    }else{
      const proveedor = this.proveedoresServicio.getProveedorByid(miFormCab.value.codProvOrd);
      //armar el objeto y enviarlo al add
      const orden : OrdenCompra = {
        numOrdenCompra: miFormCab.value.codigoOrd,
        fechaEmision: miFormCab.value.fechaEmisionOrd,
        fechaEntregaEsperada: miFormCab.value.fechaEntregaEspOrd,
        direccion:{
          calle: miFormCab.value.calleDirec,
          numero: miFormCab.value.numeroDirec,
          codPostal: miFormCab.value.codPostalDirec,
        },
        idProveedor: miFormCab.value.codProvOrd,
        razonSocialProveedor: proveedor.razonSocial,
        productos: this.ordenDetalle,
        descripcionOrden: miFormCab.value.descripcionOrd,
        cancelada:false,
        montoTotal: 2,
      }
      let confirmacion = confirm('Recuerde que una vez creada la Orden de Compra no se podran añadir mas Productos. ¿Desea crear la Orden de Compra?')
      if (confirmacion){
        this.ordenesServicio.addOrden(orden);
        miFormCab.reset()
        this.alertaSucces = true;
        this.alertaWarning = false;
      }
    }

  }


  crearOrdenDetalle(){
    console.log(this.codigoOrden)
    if ( this.codigoOrden == '' && this.codProvOrden !== ''){
      console.log('entro a crear codigo de orden')
      this.codigoOrden = this.codProvOrden + '-' + this.generarCodigoAlfanumerico(3);
    }
    if (this.codigoOrden !== '' && this.codProvOrden !== '') {
      console.log('entro a crear el detalle')
      const producto = this.productosServicio.getProductoBySKU(this.codProductoOrden);
      const detalleProducto : ProductosCantidad = {
        codSKU: this.codProductoOrden,
        nombreProducto: producto.nombre,
        cantidad: this.cantProducto,
        montoDetalle: 2
      }
      console.log(detalleProducto)
      this.ordenDetalle.push(detalleProducto);
      console.log(this.ordenDetalle)
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


}
