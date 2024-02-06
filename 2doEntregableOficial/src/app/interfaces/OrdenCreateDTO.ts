export interface OrdenCreateDTO {
    idProveedor : number | null,
    fechaEmisionOrden : Date | null,
    fechaEntregaOrden : Date | null,
    infoOrden: String,
    montoTotalOrden : number | null,
    numeroOrden : number | null,
}