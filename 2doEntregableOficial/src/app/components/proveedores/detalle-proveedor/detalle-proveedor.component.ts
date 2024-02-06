import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalle-proveedor',
  templateUrl: './detalle-proveedor.component.html',
  styleUrl: './detalle-proveedor.component.css'
})
export class DetalleProveedorComponent implements OnInit {

  constructor(
    public route: ActivatedRoute,
    public router: Router,
  ){}






  id: any = ''; //utilizado en el routing, para detalle



  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
    })
  }















}
