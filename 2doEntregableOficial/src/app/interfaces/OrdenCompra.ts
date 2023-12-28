import { Productos } from "./Productos";

export interface OrdenCompra {
    numOrdenCompra: string;
    fechaEmision: Date;
    fechaEntregaEsperada: Date;
    direccion: Direccion;
    idProveedor: number;
    razonSocialProveedor: string;
    montoTotal: number;
    productos: ProductosCantidad[];
    descripcionOrden: string;
    cancelada?: boolean;
  }

  interface Direccion {
    calle: string,
    numero: number,
    codPostal: number
  }

  export interface ProductosCantidad {
      codSKU: string,
      nombreProducto: string,
      cantidad: number | string,
      montoDetalle: number,
    }
