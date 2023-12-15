import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './components/cabecera/cabecera.component';
import { ProveedoresComponent } from './components/modulos/proveedores/proveedores.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { ProductosComponent } from './components/modulos/productos/productos.component';
import { OrdenesDeCompraComponent } from './components/modulos/ordenes-de-compra/ordenes-de-compra.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    ProveedoresComponent,
    PrincipalComponent,
    ProductosComponent,
    OrdenesDeCompraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
