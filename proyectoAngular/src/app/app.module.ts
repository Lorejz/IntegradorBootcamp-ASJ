import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './components/cabecera/cabecera.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { ProductosComponent } from './components/modulos/productos/productos.component';
import { OrdenesDeCompraComponent } from './components/modulos/ordenes-de-compra/ordenes-de-compra.component';
import { ListaComponent } from './components/modulos/proveedores/lista/lista.component';
import { FormAltaComponent } from './components/modulos/proveedores/form-alta/form-alta.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    PrincipalComponent,
    ProductosComponent,
    OrdenesDeCompraComponent,
    ListaComponent,
    FormAltaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
