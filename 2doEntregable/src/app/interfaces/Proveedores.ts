export interface Proveedores {
  id?: number;
  razonSocial: string;
  rubro: RubroOpciones;
  email: string;
  nombre: string;
  direccion: Direccion;
  cuit: string;
  condIva: ivaOpciones;
}

interface Direccion {
  calle: string,
  numero: number,
  codPostal: number,
  provincia: Provincia,
}

export type RubroOpciones =
  "Textil" |
  "Electronico" |
  "Muebles" |
  "Software" |
  "Otro";

export type ivaOpciones =
  "IVA Responsable Inscripto" |
  "IVA Sujeto Exento" |
  "Responsable Monotributo" |
  "Proveedor del Exterior" |
  "Otro";

  
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