
# Proyecto Integrador Final

Desarrollo de un *Sistema de Gestión Compras* para manejar información de Proveedores, Productos y Órdenes de compra.

# Se adjunta:
- BACK (Contiene el proyecto Java SpringBoot)
- FRONT (Contiene el proyecto Angular)
- Instructivo Proyecto Integrador
- Script_Entrega_Final

## Ejecutar localmente

Pasos necesarios para correr el proyecto localmente:
 #1 - Crear base de datos en SQL Server Managment Studio, llamarla 'ProyectoIntegrador'.
 #2 - Modificar en el archivo "application.properties", en donde dice 'update' colocar 'create-drop' y en bd utilizar 'ProyectoIntegrador'.
 #3 - Hacer click derecho en el pom.xls run As -> Maven -> Maven Install
 #4 - Ejecutar el proyecto. (esto creara la base de datos)
 #5 - Modificar el "application.properties" volviendo a su configuracion inicial.
 #6 - Una vez creada la base de datos y en update el app.properties, entonces es hora de ejecutar el script(mencionado en adjuntos) con los instert
 #7 - Cargados los datos es hora de ejecutar el proyecto Angular y listo para usar!
 #8 - el usuario= admin, contraseña = admin123


## API Reference
En el controllador de cada model se detalla atravez de comentarios, nombre de funcion que es lo que
devuelve o recibe en si esa URL.


## Este proyecto fue desarrollado por: **Juan José Dominguez**

