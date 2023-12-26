import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaComponent } from './components/proveedores/lista/lista.component';
import { FormAltaComponent } from './components/proveedores/form-alta/form-alta.component';
import { HomeComponent } from './components/home/home.component';
import { ProdListaComponent } from './components/productos/prod-lista/prod-lista.component';
import { ProdFormAltaComponent } from './components/productos/prod-form-alta/prod-form-alta.component';

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
      { path: 'alta-proveedor', component: FormAltaComponent },
      { path: 'modificar-proveedor/:id', component: FormAltaComponent } 
    ]
    },
  { path: 'productos',
    children:[
      { path: '', component: ProdListaComponent },
      { path: 'alta-producto', component: ProdFormAltaComponent },
    ]
  }  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

