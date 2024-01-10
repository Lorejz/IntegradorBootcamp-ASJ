--Consultas
-- 1. Obtener todos los productos, mostrando nombre del producto, categoría, proveedor (razón social y codigo proveedor), precio.

	SELECT prod.nombre_producto as Producto,
		   cat.nombre_categoria as Categoria,
		   prov.razon_social_proveedor as Proveedor,
		   prov.id_proveedor as 'ID Proveedor',
		   prod.precio_producto as Precio
	FROM
		Productos prod, Proveedores prov, Categorias cat
	WHERE
		prod.id_proveedor = prov.id_proveedor AND
		prod.id_categoria = cat.id_categoria AND
		prod.isHabilitado_producto = 1;

-- 2. En el listado anterior, además de los datos mostrados, traer el campo imagen aunque el producto NO tenga una. Sino tiene imagen, mostrar "-".

	SELECT prod.nombre_producto as Producto,
		   cat.nombre_categoria as Categoria,
		   prov.razon_social_proveedor as Proveedor,
		   prov.id_proveedor as 'ID Proveedor',
		   prod.precio_producto as Precio,
		   COALESCE(prod.imagen_producto, '-') as Imagen
	FROM 
		Productos prod, Proveedores prov, Categorias cat
	WHERE
		prod.id_proveedor = prov.id_proveedor AND   
		prod.id_categoria = cat.id_categoria AND
		prod.isHabilitado_producto = 1;

-- 3. Mostrar los datos que se pueden modificar (en el front) del producto con ID = 2.

	SELECT cat.nombre_categoria as Categoria,
		   prod.nombre_producto as Nombre,
		   prod.imagen_producto as Imagen,
		   prod.descripcion_producto as Descripcion,
		   prod.precio_producto as Precio
	FROM 
		Productos prod, Categorias cat
	WHERE
		prod.id_producto = 2 AND   
		prod.id_categoria = cat.id_categoria;

-- 4. Listar todo los proveedores cuyo teléfono tenga la característica de Córdoba o que la provincia sea igual a alguna de las 3 con más proveedores.

	SELECT 
	    prov.id_proveedor,
	    prov.razon_social_proveedor,
	    prov.telefono_proveedor,
	    prov.id_provincia
	FROM 
	    Proveedores prov
	WHERE 
	    prov.telefono_proveedor LIKE '351%'
	    OR prov.id_provincia IN (
	        SELECT TOP 3 id_provincia
	        FROM Proveedores
	        GROUP BY id_provincia
	        ORDER BY COUNT(id_proveedor) DESC
	    );

-- 5. Traer un listado de todos los proveedores que no hayan sido eliminados , y ordenados por razon social, codigo proveedor y fecha en que se dió de alta ASC.
--De este listado mostrar los datos que correspondan con su tabla del front.

	SELECT prov.id_proveedor as 'ID Proveedor',
		   prov.sitio_web_proveedor as 'Sitio Web',
		   prov.telefono_proveedor as 'Telefono',
		   cont.nombre_contacto as 'Nombre Contacto',
		   cont.apellido_contacto as 'Apellido Contacto',
		   cont.rol_contacto as 'Rol Contacto', 
		   prov.created_at as 'Fecha Creacion'
	FROM
		Proveedores prov, Contactos cont
	WHERE
		isHabilitado_proveedor = 1 AND   
		cont.id_proveedor = prov.id_proveedor
	ORDER BY 
		razon_social_proveedor , 'ID Proveedor', 'Fecha Creacion' ASC;

-- 6. Obtener razon social, codigo proveedor, imagen, web, email, teléfono y los datos del contacto del proveedor con más ordenes de compra cargadas.

	SELECT
	    prov.id_proveedor AS CodigoProveedor,
	    prov.razon_social_proveedor AS RazonSocial,
	    prov.logo_proveedor AS Imagen,
	    prov.sitio_web_proveedor AS Web,
	    prov.telefono_proveedor AS Telefono,
	    cont.email_contacto AS Email,
	    cont.nombre_contacto AS NombreContacto,
	    cont.apellido_contacto AS ApellidoContacto

	FROM 
		Proveedores prov,
	    Contactos cont
	WHERE 
		prov.id_proveedor = cont.id_proveedor AND
	    prov.id_proveedor = (
	        SELECT TOP 1
	            id_proveedor
	        FROM
	            OrdenDeCompra
	       GROUP BY
	           id_proveedor
	        ORDER BY
	            COUNT(id_orden_compra) DESC
		);

-- 7. Mostrar la fecha emisión, nº de orden, razon social y codigo de proveedor, y la cantidad de productos de cada orden.

	SELECT
	    O.fecha_emision_orden AS FechaEmision,
	    O.id_orden_compra AS NumeroOrden,
	    P.razon_social_proveedor AS RazonSocial,
	    P.id_proveedor AS CodigoProveedor,
	    SUM(D.cantidad_detalle) AS CantidadProductos
	FROM
	    OrdenDeCompra O,
	    Proveedores P,
	    OrdenDeCompraDetalle D
	WHERE
		O.id_proveedor = P.id_proveedor AND
		O.id_orden_compra = D.id_orden_compra
	GROUP BY
	    O.fecha_emision_orden,
		O.id_orden_compra,
	    P.razon_social_proveedor,
	    P.id_proveedor
	ORDER BY
	    NumeroOrden ASC;

-- 8. En el listado anterior, diferenciar cuando una orden está Cancelada o no, y el total de la misma.

	SELECT
	    O.fecha_emision_orden AS FechaEmision,
	    O.id_orden_compra AS NumeroOrden,
	    P.razon_social_proveedor AS RazonSocial,
	    P.id_proveedor AS CodigoProveedor,
	    EO.nombre_estado AS EstadoOrden,
	    SUM(D.cantidad_detalle) AS CantidadProductos,
	    O.monto_total_orden AS TotalOrden
	FROM
	    OrdenDeCompra O,
	    Proveedores P,
	    OrdenDeCompraDetalle D,
	    EstadoOrden EO
	WHERE
		O.id_proveedor = P.id_proveedor AND
	    O.id_orden_compra = D.id_orden_compra AND
	   O.id_estado_orden = EO.id_estado_orden
	GROUP BY
	   O.fecha_emision_orden,
	   O.id_orden_compra,
	   P.razon_social_proveedor,
	    P.id_proveedor,
	    EO.nombre_estado,
	    O.monto_total_orden
	ORDER BY
	    NumeroOrden ASC;


-- 9. Mostrar el detalle de una orden de compra del proveedor 1, trayendo: SKU del producto, nombre producto, cantidad y subtotal.

	SELECT
	    od.id_orden_detalle AS Nro_Detalle,
	    p.cod_sku_producto AS 'SKU Producto',
	    p.nombre_producto AS Producto,
	    od.cantidad_detalle AS Cantidad,
	    (od.cantidad_detalle * od.precio_unitario_detalle) AS Subtotal
	FROM
		Productos p
	    INNER JOIN OrdenDeCompraDetalle od ON p.id_producto = od.id_producto
	    INNER JOIN OrdenDeCompra o ON od.id_orden_compra = o.id_orden_compra
	WHERE
	    o.id_proveedor = 1 AND 
	    o.id_orden_compra IN (
	        SELECT TOP 1 oc.id_orden_compra
	        FROM OrdenDeCompra oc
	        WHERE oc.id_proveedor = 1
	        ORDER BY oc.id_orden_compra
	    );

-- 10. Cambiar el estado a Cancelada y la fecha de modificación a la orden de compra con ID = 4.

	UPDATE OrdenDeCompra
	SET 
	    id_estado_orden = (
	        SELECT id_estado_orden FROM EstadoOrden WHERE nombre_estado = 'Cancelada'
	    ),
	    updated_at = GETDATE()
	WHERE
	    id_orden_compra = 4;

-- 11. Escribir la sentencia para eliminar el producto con id = 1 (NO EJECUTAR, SÓLO MOSTRAR SENTENCIA)

	-- Borrado Lógico
	UPDATE Productos
	SET isHabilitado_producto = 0
	WHERE id_producto = 1;

	-- Borrado Físico
	DELETE FROM Productos
	WHERE id_producto = 1;

