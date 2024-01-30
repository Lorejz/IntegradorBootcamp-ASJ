export interface ProveedoresCreateDTO {

    codigoProveedor: String
    idRubro : number | null;
    idCondicionIva : number | null;
    razonSocialProveedor : String;
    sitioWebProveedor : String;
    telefonoProveedor : String;
    cuitProveedor : String;
    logoProveedor : String;
    emailProveedor: String,

    nombreContacto : String;
    apellidoContacto : String;
    telefonoContacto : String;
    emailContacto : String;
    rolContacto : String;

    idProvincia : number| null;
    calleDireccion : String;
    numDireccion : number| null;
    codPostaDireccion : number| null;
    localidadDireccion : String;
    idPais: number | null;
}