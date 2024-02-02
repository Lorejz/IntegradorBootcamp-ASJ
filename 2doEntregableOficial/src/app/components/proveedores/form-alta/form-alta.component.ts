import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Proveedores } from '../../../interfaces/Proveedores';
import { ProveedoresService } from '../../../services/proveedores.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProveedoresBackService } from '../../../services/proveedores-back.service';
import { ProveedoresCreateDTO } from '../../../interfaces/ProveedoresCreateDTO';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-form-alta',
  templateUrl: './form-alta.component.html',
  styleUrl: './form-alta.component.css'
})
export class FormAltaComponent implements OnInit {

  constructor(
    public proveedorServicio: ProveedoresService,
    public route: ActivatedRoute,
    public router: Router,
    private proveedoresBackServicio : ProveedoresBackService
    ) { }

  id: any = '';

  alertaSucces: boolean = false;
  alertaWarning: boolean = false;

  estadoFormAlta: boolean = true;
  estadoFormModificar: boolean = false;

  //--Cosas nuevas--//
    paises : any [] = [];

    provincias : any[] = [];

    rubros : any[] = [];

    condicionesIva : any[] = [];

    proveedorCreateDTO : ProveedoresCreateDTO = {
      codigoProveedor : "",
      idRubro : null,
      idCondicionIva : null,
      razonSocialProveedor : "",
      sitioWebProveedor : "",
      telefonoProveedor : "",
      cuitProveedor : "",
      logoProveedor : "",
      emailProveedor : "",
  
      nombreContacto : "",
      apellidoContacto : "",
      telefonoContacto : "",
      emailContacto : "",
      rolContacto : "",
  
      idProvincia : null,
      calleDireccion : "",
      numDireccion : null,
      codPostaDireccion : null,
      localidadDireccion : "",
      idPais : null
    }

  //----------------//

  ngOnInit(): void {

    this.proveedoresBackServicio.getPaises().subscribe( paises => {
      this.paises = paises;
    })

    this.proveedoresBackServicio.getRubros().subscribe( rubros => {
      this.rubros = rubros;
    })

    this.proveedoresBackServicio.getCondicionesIva().subscribe( condiciones => {
      this.condicionesIva = condiciones;
    })

    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
    })

    if (this.id !== null) {
      console.log('si hay id')
      this.estadoFormAlta = false; //al estar en false, no entra a la logica de creacion del submit de la funcion 'crearProveedor()'
      this.estadoFormModificar = true;

      console.log('en el oninit, estado form alta-> '+this.estadoFormAlta + ', estado form mod-> '+this.estadoFormModificar)

      this.proveedoresBackServicio.getProveedorFormDTO(this.id).subscribe( provDTO => {
        this.proveedorCreateDTO = provDTO;
        if (this.proveedorCreateDTO.idPais) {
          const paisSeleccionado = this.paises.find(pais => pais.idPais === this.proveedorCreateDTO.idPais);
          if (paisSeleccionado) {
            this.proveedorCreateDTO.idPais = paisSeleccionado.idPais;
          }
          if( this.proveedorCreateDTO.idPais != null ){
            this.proveedoresBackServicio.getProvinciasByPais(this.proveedorCreateDTO.idPais).subscribe(provincias => {
              this.provincias = provincias;
                  if (this.proveedorCreateDTO.idProvincia) {
                const provinciaSeleccionada = this.provincias.find(provincia => provincia.idProvincia === this.proveedorCreateDTO.idProvincia);
                if (provinciaSeleccionada) {
                  this.proveedorCreateDTO.idProvincia = provinciaSeleccionada.idProvincia;
                }
              }
            });
          }
        }
      });      
    } else {
      console.log('no hay id, es ALTA')
    }
  }

  crearProveedor(miForm: NgForm) {
    console.log('despues de submit, estado form alta-> '+this.estadoFormAlta + ', estado form mod-> '+this.estadoFormModificar)
    if (this.estadoFormAlta == true && this.estadoFormModificar == false ) { // estado ALTA miForm.value.razonSocialProv,
      console.log('entro por if nuevo'+ 'estado form alta->'+this.estadoFormAlta + 'estado form mod->'+this.estadoFormModificar)
      if (!miForm.valid) {
        this.alertaWarning = true;
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Verifica que la informacion sea válida!"
        });
      } else {
        const proveedorDtoOut : ProveedoresCreateDTO = { 
          codigoProveedor : miForm.value.codigoProveedor,
          idRubro : miForm.value.idRubro,
          idCondicionIva : miForm.value.idCondicionIva,
          razonSocialProveedor : miForm.value.razonSocialProveedor,
          sitioWebProveedor : miForm.value.sitioWebProveedor,
          telefonoProveedor : miForm.value.telefonoProveedor,
          cuitProveedor : miForm.value.cuitProveedor,
          logoProveedor : miForm.value.logoProveedor,
          emailProveedor : miForm.value.emailProveedor,

          nombreContacto : miForm.value.nombreContacto,
          apellidoContacto : miForm.value.apellidoContacto,
          telefonoContacto : miForm.value.telefonoContacto,
          emailContacto : miForm.value.emailContacto,
          rolContacto : miForm.value.rolContacto,
      
          idProvincia : miForm.value.idProvincia,
          calleDireccion : miForm.value.calleDireccion,
          numDireccion : miForm.value.numDireccion,
          codPostaDireccion : miForm.value.codPostaDireccion,
          localidadDireccion :  miForm.value.localidadDireccion,
          idPais : miForm.value.idPais
        }
        console.log(proveedorDtoOut);
        this.proveedoresBackServicio.crearProveedor(proveedorDtoOut).subscribe( mensaje => {
          console.log(mensaje);
        })
        miForm.reset();
        this.alertaSucces = true;
        this.alertaWarning = false;
        Swal.fire({
          title: "Proveedor Cargado",
          text: "El proveedor se ha cargado correctamente.",
          icon: "success"
        });
        this.router.navigate(['/proveedores']);
      }
    }
     if (this.estadoFormModificar == true && this.estadoFormAlta == false ){ // ESTADO MODIFICACION
      console.log('entro if mod'+ 'estado form alta->'+this.estadoFormAlta + 'estado form mod->'+this.estadoFormModificar)
      if (!miForm.valid) {
        this.alertaWarning = true;
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Verifica que la informacion sea válida!"
        });
      } else {
        const proveedorModDto: ProveedoresCreateDTO = {
          codigoProveedor : miForm.value.codigoProveedor,
          idRubro : miForm.value.idRubro,
          idCondicionIva : miForm.value.idCondicionIva,
          razonSocialProveedor : miForm.value.razonSocialProveedor,
          sitioWebProveedor : miForm.value.sitioWebProveedor,
          telefonoProveedor : miForm.value.telefonoProveedor,
          cuitProveedor : miForm.value.cuitProveedor,
          logoProveedor : miForm.value.logoProveedor,
          emailProveedor : miForm.value.emailProveedor,

          nombreContacto : miForm.value.nombreContacto,
          apellidoContacto : miForm.value.apellidoContacto,
          telefonoContacto : miForm.value.telefonoContacto,
          emailContacto : miForm.value.emailContacto,
          rolContacto : miForm.value.rolContacto,
      
          idProvincia : miForm.value.idProvincia,
          calleDireccion : miForm.value.calleDireccion,
          numDireccion : miForm.value.numDireccion,
          codPostaDireccion : miForm.value.codPostaDireccion,
          localidadDireccion :  miForm.value.localidadDireccion,
          idPais : miForm.value.idPais
        }
        const swalWithBootstrapButtons = Swal.mixin({
          customClass: {
            confirmButton: "btn btn-success",
            cancelButton: "btn btn-danger"
          },
          buttonsStyling: false
        });
        swalWithBootstrapButtons.fire({
          title: "¿Desea modificar los datos del Proveedor?",
          text: "No podrá revertir esto.",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Sí, modificarlo",
          cancelButtonText: "No, cancelar",
          reverseButtons: true
        }).then((result) => {
          if (result.isConfirmed) {
            // Lógica para modificar el proveedor
            this.proveedoresBackServicio.modificarProveedor(this.id, proveedorModDto).subscribe((msj) => {
              console.log(msj);
            });
            miForm.reset();
            this.alertaSucces = true;
            this.alertaWarning = false;
            this.router.navigate(['/proveedores']);
          } else if (result.dismiss === Swal.DismissReason.cancel) {
            swalWithBootstrapButtons.fire({
              title: "Cancelado",
              text: "Los datos del proveedor no han sido modificados.",
              icon: "error"
            });
          }
        });
      }
    }
  }

  onPaisChange(): void {
    if (this.proveedorCreateDTO.idPais ) {
        this.proveedoresBackServicio.getProvinciasByPais(this.proveedorCreateDTO.idPais).subscribe(provincias => {
            this.provincias = provincias;
        });
    }
}


}
