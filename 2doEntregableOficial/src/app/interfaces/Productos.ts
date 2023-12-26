export interface Productos {
    idProveedor: string;
    codSKUProducto: string;
    categoria: categoria;
    nombre: string;
    descripcion: string;
    precio: string;
    imagen: string;
  }

  export type categoria =
  "Textil" |
  "Electronico" |
  "Muebles" |
  "Software" |
  "Otro";