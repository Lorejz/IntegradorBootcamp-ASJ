import { Producto } from "./Productos";

export interface OrdenCompra {
    numOrdenCompra: number;
    fechaEmision: Date;
    fechaEntregaEsperada: Date;
    direccion: Direccion;
    idProveedor: number;
    productos: Producto[];
    
  }

  interface Direccion {
    calle: string,
    numero: number,
    codPostal: number,
    provincia: Provincia,
  }

  export type Provincia =
    "Buenos Aires" |
    "Catamarca" |
    "Chaco" |
    "Chubut" |
    "Córdoba" |
    "Corrientes" |
    "Entre Ríos" |
    "Formosa" |
    "Jujuy" |
    "La Pampa" |
    "La Rioja" |
    "Mendoza" |
    "Misiones" |
    "Neuquén" |
    "Río Negro" |
    "Salta" |
    "San Juan" |
    "San Luis" |
    "Santa Cruz" |
    "Santa Fe" |
    "Santiago del Estero" |
    "Tierra del Fuego" |
    "Tucumán";