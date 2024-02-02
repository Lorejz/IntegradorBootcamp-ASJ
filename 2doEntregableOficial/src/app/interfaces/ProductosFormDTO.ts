export interface ProductosFormDTO {
    skuProducto : String,
    idCategoria : number | null,
    idProveedor : number | null,
    nombreProducto : String,
    imagenProducto : String,
    descProducto : String,
    precioProducto : number | null
}