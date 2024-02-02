import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductosFormDTO } from '../../../interfaces/ProductosFormDTO';
import { ProductosBackService } from '../../../services/productos-back.service';
import { ProveedoresCreateDTO } from '../../../interfaces/ProveedoresCreateDTO';
import { ProveedoresBackService } from '../../../services/proveedores-back.service';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrl: './detalle-producto.component.css'
})
export class DetalleProductoComponent implements OnInit {

  constructor (
    public route: ActivatedRoute,
    public router: Router,
    private productosBackService : ProductosBackService,
    private proveedoresBackService : ProveedoresBackService,
  ){}

  id: any = ''; //utilizado en el routing, para detalle

  producto : ProductosFormDTO = {
    skuProducto : "",
    idCategoria : null,
    idProveedor : null,
    nombreProducto : "",
    imagenProducto : "",
    descProducto : "",
    precioProducto : null
  }
  categoria : any = {};
  proveedor : any = {};


  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      console.log(this.id)
      this.productosBackService.getProductoById(this.id).subscribe( prod => {
        this.producto = prod;
        console.log(this.producto)
        if (this.producto.idCategoria != null){
          this.productosBackService.buscarCategoriaPorId(this.producto.idCategoria).subscribe( cat =>{
            this.categoria = cat;
            console.log(this.categoria);
          })
        }
        if (this.producto.idProveedor != null){
          this.proveedoresBackService.getProveedorFormDTO(this.producto.idProveedor).subscribe( prov =>{
            this.proveedor = prov;
            console.log(this.proveedor);
          })
        }
      })
    })
  }

}
