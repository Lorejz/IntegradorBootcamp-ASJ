import { Productos } from "../interfaces/Productos";

const productos : Productos[] = [
    {
        idProveedor: 'idp1',
        razonSocialProveedor: 'Muebles Perez',
        codSKUProducto: '151123141',
        categoria: 'Muebles',
        nombre: 'Cama Infantil Rayo McQuenn',
        descripcion: 'Cama infantil especialmente diseñada para niños.',
        precio: 12500,
        imagen: 'https://http2.mlstatic.com/D_NQ_NP_757010-MLA70769195153_072023-O.webp'
    },
    {
        idProveedor: 'idp1',
        razonSocialProveedor: 'Muebles Perez',
        codSKUProducto: '512315123',
        categoria: 'Muebles',
        nombre: 'Escritorio Industrial',
        descripcion: 'Escritorio perfecto para estudiar.',
        precio: 20250,
        imagen: 'https://http2.mlstatic.com/D_NQ_NP_961270-MLA69789844955_062023-O.webp'
    }
];

export default productos;