--Inserts a tablas
INSERT INTO Categorias (nombre_categoria, created_at, updated_at)
VALUES 
	('Electrónica', GETDATE(), GETDATE()),
	('Ropa', GETDATE(), GETDATE()),
	('Hogar', GETDATE(), NULL),
	('Deportes', GETDATE(), NULL),
	('Muebles', GETDATE(), NULL),
	('Otro', GETDATE(), NULL);

INSERT INTO Rubros(nombre_rubro, created_at, updated_at)
VALUES 
	('Tecnología', GETDATE(), GETDATE()),
	('Textil', GETDATE(), NULL),
	('Alimentos', GETDATE(), NULL),
	('Hogar/Bazar', GETDATE(), GETDATE()),
	('Jugueteria', GETDATE(), NULL),
	('Automóviles', GETDATE(), NULL);

INSERT INTO EstadoOrden (nombre_estado, created_at, updated_at)
VALUES 
	('Pendiente', GETDATE(), GETDATE()),
	('Pagada', GETDATE(), NULL),
	('Cancelada', GETDATE(), NULL);

INSERT INTO CondicionIva (nombre_condicion_iva, created_at ,updated_at)
VALUES
	('Responsable Inscripto', GETDATE(), NULL),
	('Monotributista', GETDATE(), NULL),
	('Exento', GETDATE(), NULL),
	('No Responsable', GETDATE(), NULL),
	('Responsable No Inscripto', GETDATE(), NULL),
	('Consumidor Final', GETDATE(), NULL);

INSERT INTO Pais (nombre_pais) 
VALUES 
	('Argentina'),
	('Uruguay'),
	('Brasil');

INSERT INTO Provincias (id_pais, nombre_provincia) 
VALUES 
	(1, 'Buenos Aires'),
	(1, 'Córdoba'),
	(1, 'Santa Fe'),
	(1, 'Mendoza'),
	(1, 'Tucumán'),
	(1, 'Entre Ríos');

INSERT INTO Provincias (id_pais, nombre_provincia)
VALUES
	(2, 'Montevideo'),
	(2, 'Canelones'),
	(2, 'Maldonado'),
	(2, 'Salto'),
	(2, 'Paysandú');

INSERT INTO Provincias (id_pais, nombre_provincia)
VALUES
	(3, 'Sao Paulo'),
	(3, 'Rio de Janeiro'),
	(3, 'Minas Gerais'),
	(3, 'Bahia'),
	(3, 'Ceará');

INSERT INTO Proveedores (id_rubro, id_provincia, id_condicion_iva, razon_social_proveedor, sitio_web_proveedor, telefono_proveedor, cuit_proveedor, calle_dir_proveedor, num_dir_proveedor, logo_proveedor, cod_postal_dir_proveedor, isHabilitado_proveedor, created_at, updated_at)
VALUES
	(1, 2, 1, 'Samsung Technology', 'http://www.samsungtech.com', '3512542525', '12345678901', 'Calle 1', 123, 'logo1.jpg', 1234, 1, GETDATE(), NULL),
	(2, 2, 2, 'Ropa Mauras', 'http://www.mauras-ropa.com', '3512352352', '98765432109', 'Calle 2', 456, 'logo2.jpg', 5678, 1, GETDATE(), NULL),
	(3, 7, 1, 'Mayorista Agronomico Perez', 'http://www.mayorista-perez.com', '555555555', '55555555509', 'Calle 3', 789, 'logo3.jpg', 9012, 1, GETDATE(), NULL),
	(6, 7, 2, 'Yacopini Motors', 'http://www.yacopini-motors.com', '111111111', '11111111101', 'Calle 4', 234, 'logo4.jpg', 3456, 0, GETDATE(), NULL),
	(5, 13, 1, 'Juguetes Tito', 'http://www.tito-juguetitos.com', '777777777', '77777777709', 'Calle 5', 567, 'logo5.jpg', 7890, 1, GETDATE(), NULL),
	(4, 13, 2, 'Todo Playa', 'http://www.all-playa.com', '222222222', '22222222201', 'Calle 6', 890, 'logo6.jpg', 1234, 0, GETDATE(), NULL);

INSERT INTO Contactos (id_proveedor, nombre_contacto, apellido_contacto, email_contacto, rol_contacto, created_at, updated_at)
VALUES
    (1, 'Juan', 'Perez', 'juan.perez@email.com', 'Gerente de Ventas', GETDATE(), NULL),
    (1, 'Ana', 'Gomez', 'ana.gomez@email.com', 'Encargada de Ventas', GETDATE(), NULL),
    (2, 'Carlos', 'Lopez', 'carlos.lopez@email.com', 'Coordinador de Logística', GETDATE(), NULL),
    (3, 'María', 'Martinez', 'maria.martinez@email.com', 'Asistente de Ventas', GETDATE(), NULL),
    (4, 'Pedro', 'Rodriguez', 'pedro.rodriguez@email.com', 'Técnico de Soporte', GETDATE(), NULL),
    (5, 'Laura', 'Diaz', 'laura.diaz@email.com', 'Jefe de Producción', GETDATE(), NULL),
    (6, 'Jorge', 'Fernandez', 'jorge.fernandez@email.com', 'Analista de Marketing', GETDATE(), NULL);

INSERT INTO Productos (id_categoria, id_proveedor, cod_sku_producto, precio_producto, nombre_producto, descripcion_producto, isHabilitado_producto, imagen_producto, created_at, updated_at)
VALUES
    (1, 1, 'SKU001', 499.99, 'Teléfono Inteligente Modelo X', 'Teléfono avanzado con características innovadoras.', 1, 'telefono_x.jpg', GETDATE(), NULL),
    (2, 2, 'SKU002', 29.99, 'Camiseta de Algodón', 'Camiseta de alta calidad y comodidad.', 1, 'camiseta_algodon.jpg', GETDATE(), NULL),
    (3, 3, 'SKU003', 999.99, 'Fertilizante Premium', 'Fertilizante para cultivos de alto rendimiento.', 1, 'fertilizante_premium.jpg', GETDATE(), NULL),
    (4, 6, 'SKU004', 24999.99, 'Automóvil Deportivo Modelo Z', 'Automóvil de lujo con tecnología de punta.', 0, 'auto_deportivo.jpg', GETDATE(), NULL),
    (5, 5, 'SKU005', 19.99, 'Juego de Construcción', 'Juego educativo para niños.', 1, 'juego_construccion.jpg', GETDATE(), NULL),
    (1, 1, 'SKU006', 699.99, 'Auriculares Inalámbricos', 'Auriculares de alta calidad con conexión Bluetooth.', 1, 'auriculares.jpg', GETDATE(), NULL),
    (2, 2, 'SKU007', 39.99, 'Pantalón de Jeans', 'Pantalón de jeans moderno y cómodo.', 1, 'pantalon_jeans.jpg', GETDATE(), NULL),
    (3, 3, 'SKU008', 149.99, 'Semillas de Plantas Exóticas', 'Semillas para cultivar plantas raras y exóticas.', 1, 'semillas_exoticas.jpg', GETDATE(), NULL),
    (4, 6, 'SKU009', 19999.99, 'Motocicleta Todo Terreno', 'Motocicleta robusta para aventuras extremas.', 0, 'moto_todo_terreno.jpg', GETDATE(), NULL),
    (5, 5, 'SKU010', 9.99, 'Peluche Suave', 'Peluche adorable para niños pequeños.', 1, 'peluche_suave.jpg', GETDATE(), NULL),
	(1, 1, 'SKU011', 799.99, 'Smartwatch Fitness Tracker', 'Dispositivo inteligente para seguimiento de actividad física.', 1, 'smartwatch_fitness.jpg', GETDATE(), NULL),
    (2, 2, 'SKU012', 49.99, 'Vestido Elegante', 'Vestido de alta costura para ocasiones especiales.', 1, 'vestido_elegante.jpg', GETDATE(), NULL),
    (3, 3, 'SKU013', 499.99, 'Herramientas de Jardín Profesionales', 'Set de herramientas duraderas para jardinería.', 1, 'herramientas_jardin.jpg', GETDATE(), NULL),
    (4, 6, 'SKU014', 14999.99, 'Bicicleta de Montaña de Carbono', 'Bicicleta resistente para aventuras en la montaña.', 0, 'bicicleta_carbono.jpg', GETDATE(), NULL),
    (5, 5, 'SKU015', 14.99, 'Rompecabezas Educativo', 'Rompecabezas didáctico para estimular la mente.', 1, 'rompecabezas_educativo.jpg', GETDATE(), NULL);

INSERT INTO OrdenDeCompra (id_proveedor, id_provincia, id_estado_orden, fecha_emision_orden, fecha_entrega_esperada_orden, monto_total_orden, descripcion_orden, calle_dir_orden, num_dir_orden, cod_postal_ordenm, created_at, updated_at, fecha_entrega_real_orden)
VALUES
    (1, 2, 1, '2023-01-02 14:30:00', '2023-02-02 14:30:00', 17299.58, 'Compra de productos electrónicos', 'Calle A', 123, 5678, GETDATE(), NULL, NULL),
    (2, 2, 1, '2023-06-22 14:30:00', '2023-07-22 14:30:00', 499.80, 'Compra de ropa de temporada', 'Calle B', 456, 9876, GETDATE(), NULL, NULL),
    (1, 7, 1, '2022-01-22 14:30:00', '2022-02-22 14:30:00', 1499.98, 'Compra de insumos tecnológicos/electro', 'Calle C', 789, 2109, GETDATE(), NULL, NULL),
    (4, 7, 1, '2022-06-23 14:30:00', '2022-07-23 14:30:00', 24999.99, 'Compra de vehículos deportivos', 'Calle D', 234, 3210, GETDATE(), NULL, NULL),
    (5, 13, 2, '2022-10-26 14:30:00', '2022-11-26 14:30:00', 69.94, 'Compra de juguetes para niños', 'Calle E', 567, 4321, GETDATE(), GETDATE(), NULL);

INSERT INTO OrdenDeCompraDetalle (id_producto, id_orden_compra, cantidad_detalle, precio_unitario_detalle)
VALUES
    (1, 1, 3, 499.99),
    (2, 1, 5, 29.99),
    (3, 1, 2, 999.99),
    (2, 2, 1, 29.99),
    (5, 2, 10, 19.99),
    (6, 3, 1, 699.99),
    (11, 3, 1, 799.99),
    (4, 4, 1, 24999.99),
    (15, 5, 2, 14.99),
    (10, 5, 2, 9.99);


