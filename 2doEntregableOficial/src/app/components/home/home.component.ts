import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../../services/auth-service.service';
import { Router } from '@angular/router';
import { ProveedoresBackService } from '../../services/proveedores-back.service';
import { ProductosBackService } from '../../services/productos-back.service';
import { OrdenesBackService } from '../../services/ordenes-back.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  constructor(
    private authServiceService: AuthServiceService,
    private router : Router,
    private proveedoresServicioBack : ProveedoresBackService,
    private productosServiceBack : ProductosBackService,
    private ordenesServiceBack : OrdenesBackService,
  ) { }


  cantProveedores? : number;

  cantProductos? : number;

  cantOrdenes? : number;


  ngOnInit(): void {
    if(!this.authServiceService.isLoggedIn()){
      this.router.navigate(['/login'])
    }

    this.proveedoresServicioBack.cantidadProvActivos().subscribe( cant => {
      this.cantProveedores = cant;
    });
    this.productosServiceBack.cantidadProdActivos().subscribe( cant => {
      this.cantProductos = cant;
    });
    this.ordenesServiceBack.cantidadOrdenesvActivos().subscribe( cant => {
      this.cantOrdenes = cant;
    })



  }








}
