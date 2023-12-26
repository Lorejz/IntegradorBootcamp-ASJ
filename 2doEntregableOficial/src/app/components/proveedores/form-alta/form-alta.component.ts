import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Proveedores } from '../../../interfaces/Proveedores';
import { ProveedoresService } from '../../../services/proveedores.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-alta',
  templateUrl: './form-alta.component.html',
  styleUrl: './form-alta.component.css'
})
export class FormAltaComponent implements OnInit {

  constructor(public proveedorServicio: ProveedoresService, public route: ActivatedRoute) { }

  id: any = '';

  alertaSucces: boolean = false;
  alertaWarning: boolean = false;

  estadoFormAlta: boolean = true;
  estadoFormModificar: boolean = false;

  rubroProveedor = '';
  emailProveedor = '';
  razonSocialProveedor = '';
  cuitProveedor = '';
  condIvaProveedor = '';
  sitioWebProveedor = '';
  telefonoProveedor = '';

  calleDireccion = '';
  numeroDireccion = '';
  codPostalDireccion = '';

  nombreContacto = '';
  apellidoContacto = '';
  telefonoContacto = '';
  emailContacto = '';
  rolContacto = '';

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
    })

    if (this.id !== null) {
      console.log('si hay id')
      //hay que completar los campos del form
      //llamar a servicio con getprovedorbyid
      const proveedor = this.proveedorServicio.getProveedorByid(this.id);

      this.estadoFormAlta = false; //al estar en false, no entra a la logica de creacion del submit de la funcion 'crearProveedor()'
      this.estadoFormModificar = true;

      console.log('en el oninit, estado form alta-> '+this.estadoFormAlta + ', estado form mod-> '+this.estadoFormModificar)

      this.razonSocialProveedor = proveedor.razonSocial
      this.rubroProveedor = proveedor.rubro;
      this.emailProveedor = proveedor.email;
      this.cuitProveedor = proveedor.cuit
      this.condIvaProveedor = proveedor.condIva;
      this.sitioWebProveedor = proveedor.sitioWeb;
      this.telefonoProveedor = proveedor.telefono;

      this.calleDireccion = proveedor.direccion.calle;
      this.numeroDireccion = proveedor.direccion.numero;
      this.codPostalDireccion = proveedor.direccion.codPostal;

      this.nombreContacto = proveedor.contacto.nombre;
      this.apellidoContacto = proveedor.contacto.apellido;
      this.telefonoContacto = proveedor.contacto.telefono;
      this.emailContacto = proveedor.contacto.email;
      this.rolContacto = proveedor.contacto.rol;

    } else {
      console.log('no hay id, no hay update')

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
  //
  crearProveedor(miForm: NgForm) {
    console.log('despues de submit, estado form alta-> '+this.estadoFormAlta + ', estado form mod-> '+this.estadoFormModificar)

    if (this.estadoFormAlta == true && this.estadoFormModificar == false ) { // estado ALTA
      console.log('entro por if nuevo'+ 'estado form alta->'+this.estadoFormAlta + 'estado form mod->'+this.estadoFormModificar)
      if (!miForm.valid) {
        this.alertaWarning = true;
      } else {
        const proveedor: Proveedores = {
          id: this.generarCodigoAlfanumerico(4),
          razonSocial: miForm.value.razonSocialProv,
          rubro: miForm.value.rubroProv,
          sitioWeb: miForm.value.sitioWebProv,
          telefono: miForm.value.telefonoProv,
          email: miForm.value.emailProv,
          direccion: {
            calle: miForm.value.calleDirec,
            numero: miForm.value.numeroDirec,
            codPostal: miForm.value.codPostalDirec
          },
          cuit: miForm.value.cuitProv,
          condIva: miForm.value.ivaProv,
          contacto: {
            nombre: miForm.value.nombreContac,
            apellido: miForm.value.apellidoContac,
            telefono: miForm.value.telefonoContac,
            email: miForm.value.emailContac,
            rol: miForm.value.rolContac
          }
        }
        this.proveedorServicio.addProveedor(proveedor);
        miForm.reset();
        this.alertaSucces = true;
        this.alertaWarning = false;
      }
    }
     if (this.estadoFormModificar == true && this.estadoFormAlta == false ){ // ESTADO MODIFICACION
      console.log('entro if mod'+ 'estado form alta->'+this.estadoFormAlta + 'estado form mod->'+this.estadoFormModificar)
      if (!miForm.valid) {
        this.alertaWarning = true;
      } else {
        const proveedorMod: Proveedores = {
          id: this.id,
          razonSocial: miForm.value.razonSocialProv,
          rubro: miForm.value.rubroProv,
          sitioWeb: miForm.value.sitioWebProv,
          telefono: miForm.value.telefonoProv,
          email: miForm.value.emailProv,
          direccion: {
            calle: miForm.value.calleDirec,
            numero: miForm.value.numeroDirec,
            codPostal: miForm.value.codPostalDirec
          },
          cuit: miForm.value.cuitProv,
          condIva: miForm.value.ivaProv,
          contacto: {
            nombre: miForm.value.nombreContac,
            apellido: miForm.value.apellidoContac,
            telefono: miForm.value.telefonoContac,
            email: miForm.value.emailContac,
            rol: miForm.value.rolContac
          }
        }
        this.proveedorServicio.updateProveedor(proveedorMod)
        miForm.reset();
        this.alertaSucces = true;
        this.alertaWarning = false;
      }
    }
  }

}
