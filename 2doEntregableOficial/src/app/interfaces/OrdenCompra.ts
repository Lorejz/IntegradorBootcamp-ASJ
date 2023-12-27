import { Productos } from "./Productos";

export interface OrdenCompra {
    numOrdenCompra: number;
    fechaEmision: Date;
    fechaEntregaEsperada: Date;
    direccion: Direccion;
    idProveedor: number;
    razonSocial: string;
    montoTotal: number;
    productos: ProductosCantidad[];
    
  }

  interface Direccion {
    calle: string,
    numero: number,
    codPostal: number
  }

  interface ProductosCantidad {
      codSKU: string,
      nombreProducto: string,
      cantidad: number,
      montoDetalle: number,
    }
