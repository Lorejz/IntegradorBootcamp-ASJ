import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProveedoresBackService } from '../../../services/proveedores-back.service';
import { RubroCreateDTO } from '../../../interfaces/RubroCreateDTO';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-alta-rubro',
  templateUrl: './alta-rubro.component.html',
  styleUrl: './alta-rubro.component.css'
})
export class AltaRubroComponent implements OnInit {

  constructor(
    private proveedoresBackServicio : ProveedoresBackService
  ){}

  rubros : any[] = [];

  newRubro : any = {
    nombreRubro: ""
  }

  ngOnInit(): void {
    this.proveedoresBackServicio.getRubros().subscribe( data => {
      this.rubros = data;
    })
    this.newRubro.nombreRubro = "";
  }

  crearRubro(miForm : NgForm){
    if(miForm.valid){
      const rubro : RubroCreateDTO = {
        nombreRubro : miForm.value.nombreRubro
      }
      console.log(rubro);
      this.proveedoresBackServicio.crearRubro(rubro).subscribe( msj => {
        console.log(msj);
      })
      Swal.fire({
        title: "Rubro creado!",
        text: "La operacion fue exitosa.",
        icon: "success"
      });
      this.proveedoresBackServicio.getRubros().subscribe( data => {
        this.rubros = data;
      })
      this.ngOnInit();
    }else{
      Swal.fire({
        title: "Complete el campo!",
        text: "Ingrese un nombre para el Rubro.",
        icon: "error"
      });
    }

  }

  eliminarRubro(idRubro: number) {
    Swal.fire({
      title: 'Eliminar Rubro',
      text: '¿Estás seguro de que deseas eliminar este rubro?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'No, cancelar',
      confirmButtonColor: '#dc3545', // Cambia el color del botón de confirmación según tu preferencia
      cancelButtonColor: '#6c757d', // Cambia el color del botón de cancelación según tu preferencia
    })
      .then((result) => {
        if (result.isConfirmed) {
          this.proveedoresBackServicio.eliminarRubro(idRubro).subscribe(
            (msj) => {
              console.log(msj);
            },
            (error) => {
              console.error(error);
              Swal.fire({
                title: 'Error',
                text: `Hubo un error al eliminar el rubro: ${error}`,
                icon: 'error',
              });
            },
            () => {
              // Este bloque se ejecutará después de que se complete la operación, ya sea con éxito o con error.
              this.proveedoresBackServicio.getRubros().subscribe((data) => {
                this.rubros = data;
                this.ngOnInit();
              });
            }
          );
        }
      });
  }


  modificarRubro(idRubro: number, nombreRub: string) {
    Swal.fire({
      title: 'Modificar Rubro',
      input: 'text',
      inputValue: nombreRub,
      showCancelButton: true,
      confirmButtonText: 'Guardar',
      cancelButtonText: 'Cancelar',
      preConfirm: (newValue: string) => {
        return new Promise<string>((resolve) => {
          const rubroDTO: any = {
            nombreRubro: newValue // Use the newValue parameter here
          };
          this.proveedoresBackServicio.modificarRubro(idRubro, rubroDTO).subscribe(
            (msj) => {
              console.log(rubroDTO);
              console.log(msj);
              resolve(newValue);
            },
            (error) => {
              console.error(error);
              Swal.showValidationMessage(`Hubo un error al modificar el rubro: ${error}`);
            }
          );
        });
      },
      allowOutsideClick: () => !Swal.isLoading()
    })
      .then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: 'Rubro Modificado',
            text: 'El rubro ha sido modificado correctamente.',
            icon: 'success'
          });
          this.proveedoresBackServicio.getRubros().subscribe((data) => {
            this.rubros = data;
          });
          this.ngOnInit();
        }
      });
  }





}
