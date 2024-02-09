export interface Proveedores {
    id?: string;
    razonSocial: string;
    rubro: RubroOpciones;
    email: string;
    sitioWeb: string;
    telefono: string;
    direccion: Direccion;
    cuit: string;
    condIva: IvaOpciones;
    contacto: Contacto;
  }
  
  interface Direccion {
    calle: string,
    numero: string,
    codPostal: string,
  }

  interface Contacto{
    nombre: string;
    apellido: string;
    telefono: string;
    email: string;
    rol: string;
  }
  
  export type RubroOpciones =
    "Textil" |
    "Electronico" |
    "Muebles" |
    "Software" |
    "Otro";
  
  export type IvaOpciones =
    "IVA Responsable Inscripto" |
    "IVA Sujeto Exento" |
    "Responsable Monotributo" |
    "Proveedor del Exterior" |
    "Otro";
  
  