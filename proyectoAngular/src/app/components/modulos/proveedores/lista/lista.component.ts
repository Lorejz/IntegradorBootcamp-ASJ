import { Component, OnInit } from '@angular/core';
import { ServicioProveedoresService } from '../../../../services/proveedores/servicio-proveedores.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent implements OnInit {

  proveedores: any = [];

  constructor( public miservicio: ServicioProveedoresService) {}

  ngOnInit(): void {
    this.proveedores = this.miservicio.getProveedores();
    console.log(this.proveedores);
  }

}
