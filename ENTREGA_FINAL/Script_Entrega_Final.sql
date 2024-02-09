--Inserts a tablas
INSERT INTO categorias (nombre_categoria, habilitado_categoria)
VALUES 
	('Celulares', 1),
	('Televisores', 1),
	('Gaseosas', 1),
	('Alcoholico', 1),
	('Sport', 1),
	('Todo Terreno', 1);

INSERT INTO rubros(nombre_rubro, habilitado_rubro)
VALUES 
	('Tecnologia/Electrodomesticos', 1),
	('Bebidas', 1),
	('Vehiculos', 1);

INSERT INTO estados_orden(nombre_estado, habilitado_estado)
VALUES 
	('Activa',1),
	('Cancelada',1);

INSERT INTO condicion_iva (nombre_condicion_iva)
VALUES
	('Responsable Inscripto'),
	('Monotributista'),
	('Exento'),
	('No Responsable'),
	('Responsable No Inscripto'),
	('Consumidor Final');

INSERT INTO paises(nombre_pais) 
VALUES 
	('Argentina'),
	('Uruguay'),
	('Brasil');


INSERT INTO provincias (id_pais, nombre_provincia) 
VALUES 
	(1, 'Buenos Aires'),
	(1, 'Córdoba'),
	(1, 'Santa Fe'),
	(1, 'Mendoza'),
	(1, 'Tucumán'),
	(1, 'Entre Ríos');

INSERT INTO provincias (id_pais, nombre_provincia)
VALUES
	(2, 'Montevideo'),
	(2, 'Canelones'),
	(2, 'Maldonado'),
	(2, 'Salto'),
	(2, 'Paysandú');

INSERT INTO provincias (id_pais, nombre_provincia)
VALUES
	(3, 'Sao Paulo'),
	(3, 'Rio de Janeiro'),
	(3, 'Minas Gerais'),
	(3, 'Bahia'),
	(3, 'Ceará');

INSERT INTO direccion( calle_direccion, cod_postal_direccion, localidad_direccion, num_direccion, id_provincia )
VALUES
	('Avenida San Martin Sur',5519,'Ciudad',745,4),
	('Corredor Corrientes',4832,'Palermo',321,1),
	('Aveia Peies do fuchibol',5519,'Praia do Pele',192,14)
	
INSERT INTO proveedores (id_rubro, id_direccion, id_condicion_iva, razon_social_proveedor, sitio_web_proveedor, telefono_proveedor, cuit_proveedor, logo_proveedor, is_habilitado_proveedor, created_at, updated_at, deleted_at, nombre_contacto, apellido_contacto, email_contacto, rol_contacto, telefono_contacto, codigo_proveedor, email_proveedor)
VALUES
	(1,2,1,'Samsung Technology','https://www.samsung.com/ar/','+54 0113242323','20-42751531-2','https://turbologo.com/articles/wp-content/uploads/2019/07/samsung-logo-1993.jpg.webp',1,GETDATE(),NULL,NULL,'Yotokawa','Kasawa','yokasawa@gmail.com', 'CEO Leader', '+54 0113242332', 'PROV-SAMSUNG01','samsung@gmail.com'),
	(2,1,5,'Ramon Buj SRL','https://www.bujmayorista.com.ar/','+54 2613242323','20-32751531-4','https://static.wixstatic.com/media/096951_2476e101d1ce4e5496e091fda68890f0~mv2.png/v1/crop/x_0,y_315,w_1080,h_461/fill/w_231,h_99,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/LOGO%20PNG_edited.png',1,GETDATE(),NULL,NULL,'Pedro','Buj','peterbujcito@gmail.com','Vendedor','+54 0113242332','PROV-BUJ01','proveedorBuj@gmail.com'),
	(3,3,1,'Yacopini Motors','https://www.chevroletyacopini.com.ar/','+55 0993242323','30-42751531-6','https://naurua.com/img/yacopini-motors-logo.jpg',1,GETDATE(),NULL,NULL,'Oreiro','Da Silva','fuchibolDoPele@gmail.com', 'Geirente Local', '+55 0113242332', 'PROV-YACOPINIP1','yacopini@gmail.com');

INSERT INTO Productos (id_categoria, id_proveedor, sku_producto, precio_producto, nombre_producto, desc_producto, is_habilitado_producto, imagen_producto, created_at, updated_at, deleted_at)
VALUES
	(1,1,'SKU-CEL01',38999.99,'Samsung Galaxy A24','El Samsung Galaxy A24 es el celular perfecto para aquellos que buscan un dispositivo potente y elegante. Con su diseño en color plata y pantalla Super AMOLED de 6.5 pulgadas Full HD+, disfrutarás de una experiencia visual nítida y colores vibrantes.',1,'https://http2.mlstatic.com/D_NQ_NP_729435-MLU70157370900_062023-O.webp',GETDATE(),NULL,NULL),
	(1,1,'SKU-CEL02',45999.99,'Samsung Galaxy S23 Ultra','Disfrutá la noche sin necesidad de cables. La vida no disminuye su ritmo y tomar un descanso para recargar energía es una vía rápida para la ansiedad de estar desconectado. La batería se adapta de manera inteligente a la forma en que usás tu smartphone',1,'https://http2.mlstatic.com/D_NQ_NP_816025-MLU72748491987_112023-O.webp',GETDATE(),NULL,NULL),
	(2,1,'SKU-TEL02',120999.99,'Smart Tv Samsung 55"','El Smart Tv Samsung 55 Un55cu7000gczb Led 4k cuenta con tecnología PurColor, que permite al televisor mostrar una amplia gama de colores para una calidad de imagen superior y una experiencia de visualización envolvente.',1,'https://http2.mlstatic.com/D_NQ_NP_847781-MLU73437662920_122023-O.webp',GETDATE(),NULL,NULL),

	(3,2,'SKU-GASCOCA01',1250,'Gaseosa Coca-cola 500 Ml','Esta Coca-Cola de 500 ml se presenta en una botella de plástico resistente, perfecta para llevar contigo a donde quiera que vayas. Con su icónica etiqueta roja y blanca, la botella de Coca-Cola de 500 ml es fácilmente reconocible en cualquier lugar.',1,'https://http2.mlstatic.com/D_NQ_NP_813966-MLU72613000615_112023-O.webp',GETDATE(),NULL,NULL),
	(3,2,'SKU-GASFANTA04',659,'Fanta Naranja Lata 354 Ml','La Fanta es una bebida refrescante y carbonatada conocida por su delicioso sabor a frutas y su colorida presentación. Esta lata de Fanta ofrece una experiencia refrescante y llena de sabor',1,'https://http2.mlstatic.com/D_NQ_NP_632321-MLA51288753715_082022-O.webp',GETDATE(),NULL,NULL),
	(4,2,'SKU-ALCFERNET04',9599.99,'Fernet Branca 3L','El fernet argentino es una bebida alcohólica de origen italiano que se ha convertido en un ícono cultural en Argentina. Esta bebida, de un característico color oscuro y sabor amargo, es muy apreciada por los argentinos.',1,'https://http2.mlstatic.com/D_NQ_NP_669398-MLA74246709083_012024-O.webp',GETDATE(),NULL,NULL),
	(4,2,'SKU-ALCJAGGER04',62500,'Jägermeister 56 Selected 1L','El sabor de Jägermeister es dulce y especiado, con notas de regaliz, hierbas aromáticas, cítricos y una sutil pizca de amargor. Su aroma es intenso y embriagador, con una mezcla de fragancias herbales y especiadas que invitan a ser exploradas.',1,'https://http2.mlstatic.com/D_NQ_NP_855973-MLA50187428666_062022-O.webp',GETDATE(),NULL,NULL),

	(6,3,'SKU-TODOT04',49500000,'Toyota Hilux 2.8 4x4','La Toyota Hilux 4x4 es una camioneta pickup de tamaño mediano fabricada por el fabricante japonés Toyota. Es conocida por su durabilidad, versatilidad y capacidad para adaptarse a una amplia variedad de condiciones de manejo y terrenos.',1,'https://http2.mlstatic.com/D_NQ_NP_902627-MLA74314400688_022024-O.webp',GETDATE(),NULL,NULL),
	(6,3,'SKU-TODOT05',46500000,'Volkswagen Amarok V6','Se destaca por su robustez, potencia y versatilidad, lo que la convierte en una opción popular para aquellos que buscan un vehículo capaz de enfrentar una amplia variedad de desafíos en el trabajo y en el tiempo libre.',1,'https://http2.mlstatic.com/D_NQ_NP_777782-MLA74294823390_022024-O.webp',GETDATE(),NULL,NULL),

	(5,3,'SKU-SPORT03',3500000,'Volkswagen Polo 1.6 Confortline','El Volkswagen Polo Track presenta un diseño moderno y deportivo, con líneas aerodinámicas y detalles distintivos que le dan una apariencia robusta y elegante. Destaca por su tamaño compacto, ideal para maniobrar fácilmente en entornos.',1,'https://http2.mlstatic.com/D_NQ_NP_725280-MLA71397292471_082023-O.webp',GETDATE(),NULL,NULL),
	(5,3,'SKU-SPORT23',10500000,'BMW Serie 3 2.0 220i','El BMW es una marca reconocida por su compromiso con la innovación, el rendimiento y el lujo.El BMW Serie 3 ofrece una experiencia de conducción emocionante y dinámica gracias a su potente motor y su avanzado sistema de tracción trasera o integral.',1,'https://http2.mlstatic.com/D_NQ_NP_835924-MLA74411832861_022024-O.webp',GETDATE(),NULL,NULL);


INSERT INTO orden(id_proveedor, numero_orden, id_estado, fecha_emision_orden, fecha_entrega_orden, monto_total_orden, info_orden, created_at, updated_at)
VALUES
    (1, 10001, 1, GETDATE(), '2024-02-27 10:14:47.286667', 358999.95, 'Por favor lo antes posible es para revender', GETDATE(), NULL),
    (2, 10002, 1, GETDATE(), '2024-02-22 10:14:47.286667', 165849.99, 'Por favor enviar con mucho cuidado, que no se rompan las bebidas alcoholicas', GETDATE(), NULL),
    (3, 10003, 1, GETDATE(), '2024-02-25 10:14:47.286667', 116500000, 'Por favor enviar en camion de carga, lo mas antes posible', GETDATE(), NULL);

INSERT INTO orden_detalle(id_orden, id_producto, cant_orden_detalle, precio_uni_orden_detalle)
VALUES
    (1, 1, 3, 38999.99),
    (1, 3, 2, 120999.99),
	(2, 4, 25, 1250),
	(2,7,2,62500),
	(2,6,1,9599.99),
	(3,10,5,3500000),
	(3,8,2,49500000);


