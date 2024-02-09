import { Proveedores } from "../interfaces/Proveedores";

const proveedores: Proveedores[] = [
    {
        id: 'idp1',
        razonSocial: 'Muebles Perez',
        rubro: 'Muebles',
        email: 'juanjdominguez18@gmail.com',
        sitioWeb: 'www.facebook.com',
        telefono: '43245920',
        direccion: {
            calle: 'perez y olascoaga',
            numero: '422',
            codPostal: '222'
        },
        cuit: '12312321',
        condIva: 'IVA Responsable Inscripto',
        contacto:{
            nombre: 'Juan José',
            apellido: 'Dominguez',
            telefono: '0261532222',
            email: 'peprez@gmail.com',
            rol: 'gerente ceo'
        }
    }
];

export default proveedores;
