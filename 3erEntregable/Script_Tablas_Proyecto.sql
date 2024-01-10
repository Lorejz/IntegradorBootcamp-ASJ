
--Create Database y tablas

CREATE DATABASE proyecto
GO USE entregable_proyecto;

CREATE TABLE Categorias(
	id_categoria INT NOT NULL PRIMARY KEY IDENTITY (1,1),
	nombre_categoria varchar(50),
	created_at DATETIME NOT NULL,
	updated_at DATETIME
);

CREATE TABLE Rubros(
	id_rubro INT NOT NULL PRIMARY KEY IDENTITY (1,1),
	nombre_rubro varchar(50),
	created_at DATETIME NOT NULL,
	updated_at DATETIME
);

CREATE TABLE EstadoOrden(
	id_estado_orden INT NOT NULL PRIMARY KEY IDENTITY (1,1),
	nombre_estado varchar(50),
	created_at DATETIME NOT NULL,
	updated_at DATETIME
);

CREATE TABLE CondicionIva(
	id_condicion_iva INT NOT NULL PRIMARY KEY IDENTITY (1,1),
	nombre_condicion_iva varchar(50),
	created_at DATETIME NOT NULL,
	updated_at DATETIME
);


CREATE TABLE Pais(
	id_pais INT NOT NULL PRIMARY KEY IDENTITY (1,1),
	nombre_pais varchar(50),
);

CREATE TABLE Provincias(
	id_provincia INT NOT NULL PRIMARY KEY IDENTITY (1,1),
	id_pais INT,
	nombre_provincia varchar(50),
	FOREIGN KEY (id_pais) REFERENCES Pais (id_pais)
);

CREATE TABLE Proveedores(
	id_proveedor INT NOT NULL PRIMARY KEY IDENTITY (1,1),
	id_rubro INT,
	id_provincia INT,
	id_condicion_iva INT,
	razon_social_proveedor varchar(50),
	sitio_web_proveedor varchar(200),
	telefono_proveedor VARCHAR(20),
	cuit_proveedor VARCHAR(20),
	calle_dir_proveedor varchar(50),
	num_dir_proveedor INT,
	logo_proveedor varchar(255),
	cod_postal_dir_proveedor INT,
	isHabilitado_proveedor BIT,
	created_at DATETIME NOT NULL,
	updated_at DATETIME,
	FOREIGN KEY (id_rubro) REFERENCES Rubros (id_rubro),
	FOREIGN KEY (id_provincia) REFERENCES Provincias (id_provincia),
	FOREIGN KEY (id_condicion_iva) REFERENCES CondicionIva (id_condicion_iva)
);

CREATE TABLE Contactos(
	id_contacto INT NOT NULL PRIMARY KEY IDENTITY (1,1),
	id_proveedor INT,
	nombre_contacto varchar(60),
	apellido_contacto varchar(60),
	email_contacto varchar(50),
	rol_contacto varchar(30),
	created_at DATETIME NOT NULL,
	updated_at DATETIME,
	FOREIGN KEY (id_proveedor) REFERENCES Proveedores (id_proveedor),
);

CREATE TABLE Productos(
	id_producto INT NOT NULL PRIMARY KEY IDENTITY (1,1),
	id_categoria INT,
	id_proveedor INT,
	cod_sku_producto varchar(100),
	precio_producto FLOAT,
	nombre_producto varchar(50),
	descripcion_producto varchar(200),
	isHabilitado_producto BIT,
	imagen_producto varchar(255),
	created_at DATETIME NOT NULL,
	updated_at DATETIME,
	FOREIGN KEY (id_categoria) REFERENCES Categorias (id_categoria),
	FOREIGN KEY (id_proveedor) REFERENCES Proveedores (id_proveedor),
);

CREATE TABLE OrdenDeCompra(
	id_orden_compra INT NOT NULL PRIMARY KEY IDENTITY (1,1),
	id_proveedor INT,
	id_provincia INT,
	id_estado_orden INT,
	fecha_emision_orden DATETIME,
	fecha_entrega_esperada_orden DATETIME,
	monto_total_orden FLOAT,
	descripcion_orden varchar(150),
	calle_dir_orden varchar(50),
	num_dir_orden INT,
	cod_postal_ordenm INT,
	created_at DATETIME NOT NULL,
	updated_at DATETIME,
	fecha_entrega_real_orden DATETIME,
	FOREIGN KEY (id_proveedor) REFERENCES Proveedores (id_proveedor),
	FOREIGN KEY (id_provincia) REFERENCES Provincias (id_provincia),
	FOREIGN KEY (id_estado_orden) REFERENCES EstadoOrden (id_estado_orden),
);

CREATE TABLE OrdenDeCompraDetalle(
	id_orden_detalle INT NOT NULL PRIMARY KEY IDENTITY (1,1),
	id_producto INT,
	id_orden_compra INT,
	cantidad_detalle INT,
	precio_unitario_detalle FLOAT,
	FOREIGN KEY (id_producto) REFERENCES Productos (id_producto),
	FOREIGN KEY (id_orden_compra) REFERENCES OrdenDeCompra (id_orden_compra),
);




