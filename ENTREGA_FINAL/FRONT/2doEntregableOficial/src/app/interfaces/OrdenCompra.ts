
export interface OrdenCompra {
    numOrdenCompra: string;
    fechaEmision: Date | null;
    fechaEntregaEsperada: Date | null;
    direccion: Direccion;
    idProveedor: string;
    razonSocialProveedor: string;
    montoTotal: number | null;
    productos: ProductosCantidad[];
    descripcionOrden: string;
    estado?: estado;
  }

  interface Direccion {
    calle: string,
    numero: string,
    codPostal: number | null
  }

  export interface ProductosCantidad {
      codSKU: string,
      nombreProducto: string,
      cantidad: number | null,
      montoDetalle: number | null,
    }

    export type estado =
    "Pendiente" |
    "Cancelada" |
    "Pagada";