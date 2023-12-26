import { Component, OnInit } from '@angular/core';
import { ProveedoresService } from '../../../services/proveedores.service';
import { Proveedores } from '../../../interfaces/Proveedores';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent implements OnInit {


  constructor ( public proveedoresService : ProveedoresService, public router: Router){}

  proveedores : Proveedores[] = [];

  ngOnInit(): void {
    this.proveedores = this.proveedoresService.getProveedores();
  }

  eliminarProveedor(id:any){
    let confirmacion = confirm("¿Desea eliminar el Proveedor? #"+id)
    if(confirmacion){
      this.proveedoresService.deleteProveedor(id);
      this.ngOnInit();
    }

  }

  modificarProveedor(id:any){
    /* this.proveedoresService.updateProveedor(p); */
    //routeo, ruta mas id
    this.router.navigate(['/proveedores/modificar-proveedor/',id])

  }
  


}
