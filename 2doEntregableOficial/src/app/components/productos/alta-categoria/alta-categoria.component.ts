import { Component, OnInit } from '@angular/core';
import { ProductosBackService } from '../../../services/productos-back.service';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-alta-categoria',
  templateUrl: './alta-categoria.component.html',
  styleUrl: './alta-categoria.component.css'
})
export class AltaCategoriaComponent implements OnInit {

  constructor(
    private productosBackServicio : ProductosBackService,
  ){}

  categorias : any[] = [];

  newCategoria : any = {
    idCategoria: 0,
    nombreCategoria: ""
  }
  pedro : string = ""

  ngOnInit(): void {
    this.productosBackServicio.buscarCategoriasTodas().subscribe( data => {
      this.categorias = data;
      console.log(this.categorias)
    })
  }


  crearCategoria(miForm:NgForm){
    if(miForm.valid){
      const categoria : any = {
        idCategoria : 0,
        nombreCategoria : miForm.value.nombreCategoria
      }
      console.log(categoria);
      this.productosBackServicio.crearCategoria(categoria).subscribe( msj => {
        console.log(msj);
      })
      Swal.fire({
        title: "Categoria creado!",
        text: "La operacion fue exitosa.",
        icon: "success"
      });
      this.productosBackServicio.buscarCategoriasTodas().subscribe( data => {
        this.categorias = data;
        console.log(this.categorias)
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

  modificarCategoria(idCategoria : number, nombreCategoria : string){
    Swal.fire({
      title: 'Modificar Categoria',
      input: 'text',
      inputValue: nombreCategoria,
      showCancelButton: true,
      confirmButtonText: 'Guardar',
      cancelButtonText: 'Cancelar',
      preConfirm: (newValue: string) => {
        return new Promise<string>((resolve) => {
          const categoria: any = {
            idCategoria:0,
            nombreCategoria: newValue // Use the newValue parameter here
          };
          this.productosBackServicio.modificarCategoria(idCategoria,categoria).subscribe(
            (msj) => {
              console.log(categoria);
              console.log(msj);
              resolve(newValue);
            },
            (error) => {
              console.error(error);
              Swal.showValidationMessage(`Hubo un error al modificar la Categoria: ${error}`);
            }
          );
        });
      },
      allowOutsideClick: () => !Swal.isLoading()
    })
      .then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: 'Categoria Modificado',
            text: 'La Categoria, ha sido modificado correctamente.',
            icon: 'success'
          });
          this.productosBackServicio.buscarCategoriasTodas().subscribe( data => {
            this.categorias = data;
            console.log(this.categorias)
          });
          this.ngOnInit();
        }
      });
  }

  eliminarCategoria(idCategoria : number){
    Swal.fire({
      title: 'Eliminar Categoria',
      text: '¿Estás seguro de que deseas eliminar esta Categoria?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'No, cancelar',
      confirmButtonColor: '#dc3545', // Cambia el color del botón de confirmación según tu preferencia
      cancelButtonColor: '#6c757d', // Cambia el color del botón de cancelación según tu preferencia
    })
      .then((result) => {
        if (result.isConfirmed) {
          this.productosBackServicio.eliminarCategoria(idCategoria).subscribe(
            (msj) => {
              console.log(msj);
            },
            (error) => {
              console.error(error);
              Swal.fire({
                title: 'Error',
                text: `Hubo un error al eliminar la categoria: ${error}`,
                icon: 'error',
              });
            },
            () => {
              // Este bloque se ejecutará después de que se complete la operación, ya sea con éxito o con error.
              this.productosBackServicio.buscarCategoriasTodas().subscribe( data => {
                this.categorias = data;
                console.log(this.categorias)
              });
              this.ngOnInit();
            }
          );
        }
      });
  }

  darAltaCategoria(idCategoria:number){
    Swal.fire({
      title: 'Dar de alta Categoria',
      text: '¿Estás seguro de que deseas dar de alta esta Categoria?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, dar de alta',
      cancelButtonText: 'No, cancelar',
      confirmButtonColor: '#dc3545', // Cambia el color del botón de confirmación según tu preferencia
      cancelButtonColor: '#6c757d', // Cambia el color del botón de cancelación según tu preferencia
    })
      .then((result) => {
        if (result.isConfirmed) {
          this.productosBackServicio.altaCategoria(idCategoria).subscribe(
            (msj) => {
              console.log(msj);
            },
            (error) => {
              console.error(error);
              Swal.fire({
                title: 'Error',
                text: `Hubo un error al activar la categoria: ${error}`,
                icon: 'error',
              });
            },
            () => {
              // Este bloque se ejecutará después de que se complete la operación, ya sea con éxito o con error.
              this.productosBackServicio.buscarCategoriasTodas().subscribe( data => {
                this.categorias = data;
                console.log(this.categorias)
              });
              this.ngOnInit();
            }
          );
        }
      });
  }




}
