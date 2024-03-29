import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaComponent } from './components/proveedores/lista/lista.component';
import { FormAltaComponent } from './components/proveedores/form-alta/form-alta.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';
import { ProdFormAltaComponent } from './components/productos/prod-form-alta/prod-form-alta.component';
import { ProdListaComponent } from './components/productos/prod-lista/prod-lista.component';
import { OrdenFormAltaComponent } from './components/ordenes-de-compra/orden-form-alta/orden-form-alta.component';
import { OrdenListaComponent } from './components/ordenes-de-compra/orden-lista/orden-lista.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { AltaRubroComponent } from './components/proveedores/alta-rubro/alta-rubro.component';
import { FiltroNombreProductoPipe } from './pipes/filtro-nombre-producto.pipe';
import { DetalleProductoComponent } from './components/productos/detalle-producto/detalle-producto.component'; 
import { AltaCategoriaComponent } from './components/productos/alta-categoria/alta-categoria.component';
import { DetalleOrdenComponent } from './components/ordenes-de-compra/detalle-orden/detalle-orden.component';
import { DetalleProveedorComponent } from './components/proveedores/detalle-proveedor/detalle-proveedor.component';
import { LoginComponent } from './components/login/login.component';
import { FiltroRazonSocialProveedorPipe } from './pipes/filtro-razon-social-proveedor.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    FormAltaComponent,
    NavbarComponent,
    HomeComponent,
    ProdFormAltaComponent,
    ProdListaComponent,
    OrdenFormAltaComponent,
    OrdenListaComponent,
    FooterComponent,
    AltaRubroComponent,
    FiltroNombreProductoPipe,
    DetalleProductoComponent,
    AltaCategoriaComponent,
    DetalleOrdenComponent,
    DetalleProveedorComponent,
    LoginComponent,
    FiltroRazonSocialProveedorPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
