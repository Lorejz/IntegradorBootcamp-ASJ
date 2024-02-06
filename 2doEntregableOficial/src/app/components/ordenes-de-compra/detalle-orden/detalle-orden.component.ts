import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrdenesBackService } from '../../../services/ordenes-back.service';
import { OrdenVistaDetalleDTO } from '../../../interfaces/OrdenVistaDetalleDTO ';

@Component({
  selector: 'app-detalle-orden',
  templateUrl: './detalle-orden.component.html',
  styleUrl: './detalle-orden.component.css'
})
export class DetalleOrdenComponent  implements OnInit {

  constructor(
    public route: ActivatedRoute,
    public router: Router,
    private ordenBackService : OrdenesBackService
  ){}



  id:any = '';

  orden!: OrdenVistaDetalleDTO;


  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.ordenBackService.getOrdenById(this.id).subscribe(
        (data: OrdenVistaDetalleDTO) => {
          this.orden = {
            ...data,
            fechaEmisionOrden: this.formatearFecha(new Date(data.fechaEmisionOrden)),
            fechaEntregaOrden: this.formatearFecha(new Date(data.fechaEntregaOrden))
          };
        },
        (error) => {
          console.error('Error al obtener la orden:', error);
        }
      );
    });
  
    console.log(this.id)
  }
  

  formatearFecha(fecha: Date): string {
    return fecha.toISOString().split('T')[0];
  }



}
