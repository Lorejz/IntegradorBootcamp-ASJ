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
    OrdenListaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
