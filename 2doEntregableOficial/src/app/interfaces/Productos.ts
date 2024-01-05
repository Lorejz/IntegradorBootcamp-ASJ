export interface Productos {
    idProveedor: string;
    razonSocialProveedor: string,
    codSKUProducto: string;
    categoria: categoria;
    nombre: string;
    descripcion: string;
    precio: number | null;
    imagen: string;
  }

  export type categoria =
  "Textil" |
  "Electronico" |
  "Muebles" |
  "Software" |
  "" |
  "Otro";