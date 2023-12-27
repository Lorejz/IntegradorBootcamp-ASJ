import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProveedoresService } from '../../../services/proveedores.service';
import { Proveedores } from '../../../interfaces/Proveedores';
import proveedores from '../../../data/proveedores';
import { Productos } from '../../../interfaces/Productos';
import { ProductosService } from '../../../services/productos.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-prod-form-alta',
  templateUrl: './prod-form-alta.component.html',
  styleUrl: './prod-form-alta.component.css'
})
export class ProdFormAltaComponent implements OnInit {

  constructor(public proveedoresServicio: ProveedoresService, public productosServicio: ProductosService, public route: ActivatedRoute, public router: Router) { }

  alertaSucces: boolean = false;
  alertaWarning: boolean = false;

  estadoFormAlta: boolean = true;
  estadoFormModificar: boolean = false;

  codSKUproducto = '';
  categoriaProducto = '';
  nombreProducto = '';
  descProducto = '';
  precioProducto = '';
  razonProvProducto = ''; //id Proveedor
  imagenProducto = '';

  proveedores: Proveedores[] = [];

  codSKU: any = '';


  ngOnInit(): void {
    this.proveedores = this.proveedoresServicio.getProveedores();

    this.route.paramMap.subscribe(params => {
      this.codSKU = params.get('codSKU');
    })

    if (this.codSKU !== null) {
      console.log('hay sku de producto, a modificar')

      this.estadoFormAlta = false; //al estar en false, no entra a la logica de creacion del submit de la funcion 'crearProveedor()'
      this.estadoFormModificar = true;

      const producto = this.productosServicio.getProductoBySKU(this.codSKU);

      this.codSKUproducto = producto.codSKUProducto;
      this.categoriaProducto = producto.categoria;
      this.nombreProducto = producto.nombre;
      this.descProducto = producto.descripcion;
      this.precioProducto = producto.precio;
      this.razonProvProducto = producto.idProveedor;
      this.imagenProducto = producto.imagen;

    } else {
      console.log('no hay sku, es un producto nuevo')
    }
  }

  crearProducto(miForm: NgForm) {
    if (this.estadoFormAlta == true && this.estadoFormModificar == false) { // estado ALTA
      if (!miForm.valid) {
        this.alertaWarning = true;
      } else {
        const proveedor: Proveedores = this.proveedoresServicio.getProveedorByid(miForm.value.razonProvProd);
        const producto: Productos = {
          idProveedor: miForm.value.razonProvProd,
          razonSocialProveedor: proveedor.razonSocial,
          codSKUProducto: miForm.value.codSKUProd,
          categoria: miForm.value.categoriaProd,
          nombre: miForm.value.nombreProd,
          descripcion: miForm.value.descProd,
          precio: miForm.value.precioProd,
          imagen: miForm.value.imagenProd,
        }
        console.log(producto);
        this.productosServicio.addProducto(producto);
        miForm.reset();
        this.alertaSucces = true;
        this.alertaWarning = false;
      }
    }
    if(this.estadoFormModificar == true && this.estadoFormAlta == false ){ // ESTADO MODIFICACION
      if (!miForm.valid) {
        this.alertaWarning = true;
      } else {
        const proveedorMod: Proveedores = this.proveedoresServicio.getProveedorByid(miForm.value.razonProvProd);
        const productoMod: Productos = {
          idProveedor: miForm.value.razonProvProd,
          razonSocialProveedor: proveedorMod.razonSocial,
          codSKUProducto: miForm.value.codSKUProd,
          categoria: miForm.value.categoriaProd,
          nombre: miForm.value.nombreProd,
          descripcion: miForm.value.descProd,
          precio: miForm.value.precioProd,
          imagen: miForm.value.imagenProd,
        }
        let confirmacion = confirm("¿Desea modificar los datos del Producto?");
        if (confirmacion){
          this.productosServicio.updateProducto(productoMod);
          miForm.reset();
          this.alertaSucces = true;
          this.alertaWarning = false;
          this.router.navigate(['/productos']);
        }
      }
    }
  }

}
