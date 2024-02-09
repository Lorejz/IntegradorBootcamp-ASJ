import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProveedorVistaDetalleDTO } from '../../../interfaces/ProveedorVistaDetalleDTO';
import { ProveedoresBackService } from '../../../services/proveedores-back.service';

@Component({
  selector: 'app-detalle-proveedor',
  templateUrl: './detalle-proveedor.component.html',
  styleUrl: './detalle-proveedor.component.css'
})
export class DetalleProveedorComponent implements OnInit {

  constructor(
    public route: ActivatedRoute,
    public router: Router,
    private proveedoresBackService : ProveedoresBackService
  ){}


  id: any = ''; //utilizado en el routing, para detalle

  proveedor! : ProveedorVistaDetalleDTO;



  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
    })

    if( this.id != null ){
      this.proveedoresBackService.getProvForDetalle(this.id).subscribe( prov => {
        this.proveedor = prov;
      })
    }


  }















}
