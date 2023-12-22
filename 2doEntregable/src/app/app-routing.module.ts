import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/modulos/home/home.component'; //home mendomarket

import { ListaComponent } from './components/modulos/proveedores/lista/lista.component'; //lista proveedores
import { FormAltaComponent } from './components/modulos/proveedores/form-alta/form-alta.component';

const routes: Routes = [
  { path: 'home',
    children: [
      { path: '', component: HomeComponent },
      { path: 'home', component: HomeComponent } 
    ]
    },
  
  { path: 'proveedores',
    children: [
      { path: '', component: ListaComponent },
      { path: 'alta-proveedor', component: FormAltaComponent } 
    ]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
