import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './components/principal/principal.component';

/* modulo proveedores */
import { ListaComponent } from './components/modulos/proveedores/lista/lista.component';
import { FormAltaComponent } from './components/modulos/proveedores/form-alta/form-alta.component';

const routes: Routes = [
  { path: "proveedores-lista", component : ListaComponent },
  { path: "proveedores-alta",component: FormAltaComponent },
  { path: "", component : PrincipalComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
