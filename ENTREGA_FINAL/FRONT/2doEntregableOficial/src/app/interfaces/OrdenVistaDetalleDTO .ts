export interface OrdenVistaDetalleDTO {
    numeroOrden: number;
    fechaEmisionOrden: string;
    fechaEntregaOrden: string;
    razonSocialProveedor: string;
    logoProveedor: string;
    montoTotalOrden : number,
    nombreEstado : String,
    infoOrden : String,
    ordenDetalles: DetallesOrdenVistaDTO[];
}

interface DetallesOrdenVistaDTO {
    nombreProducto: string;
    cantidad: number;
    precioUnitario: number;
    subTotal: number;
}
