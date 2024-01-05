import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaComponent } from './components/proveedores/lista/lista.component';
import { FormAltaComponent } from './components/proveedores/form-alta/form-alta.component';
import { HomeComponent } from './components/home/home.component';
import { ProdListaComponent } from './components/productos/prod-lista/prod-lista.component';
import { ProdFormAltaComponent } from './components/productos/prod-form-alta/prod-form-alta.component';
import { OrdenListaComponent } from './components/ordenes-de-compra/orden-lista/orden-lista.component';
import { OrdenFormAltaComponent } from './components/ordenes-de-compra/orden-form-alta/orden-form-alta.component';

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
    children: [
      { path: '', component: ProdListaComponent },
      { path: 'alta-producto', component: ProdFormAltaComponent },
      { path: 'modificar-producto/:codSKU', component: ProdFormAltaComponent }
    ]
  },
  { path: 'ordenes-de-compra', 
    children: [
      { path: '', component: OrdenListaComponent },
      { path: 'crear-orden-de-compra', component: OrdenFormAltaComponent },
      { path: 'modificar-orden-de-compra/:numOrdenCompra', component: OrdenFormAltaComponent }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

