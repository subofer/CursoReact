# Bienvenido a mi primer aplicación React.

Esta claro que el diseño y la estetica no son mi fuerte, pero con un poco de voluntad y perseberancia consegui una aplicación que cumple con su objetivo y funciona de manera eficiente.


# Tecnologias aplicadas.

Luego de hacer el curso de Html, css, Js y React, he podido completar este proyecto, el cual fue una adaptación del proyecto HTML a React.

## Instalación

Este proyecto se creo usando la herramienta **Create-React-App.**
Podes instalarlo clonado el repositorio Git "git clone https://github.com/subofer/CursoReact.git"
Una vez descargado, usar "npm install" para descargar las dependencias.
Finalmente, "npm start" para montar el live server.


## Contenido

Se trata de un e-comerce con gestión de usuarios, control de stock y conexión a Firebase.
Mas adelante se planea agregar calculo automatico de materiales, costos y precios de venta.

|                |Local                          |Remoto                       |
|----------------|-------------------------------|-----------------------------|
|Header          |`Contenido estatico`           	|Enlaces                    |
|NavBar          |`Formato`                      	|Enlaces					   |
|Contenido	 	 |`Información y texto`          	|Valores, precios, productos. |
|Modals			 |`Ventanas Modal para Login y cart`|Información de productos y usuarios.|
|Footer			 |`Enlaces redes sociales, info`	|Enlaces navegación|



## Diagrama limitado del funcionamiento de la App

Un pequeño esquema de funcionamiento de la Aplicación, mas que nada para probar el MD.

```mermaid
sequenceDiagram
Home->> Productos: React Router
Note right of Home: Login usuarios, <br/> Redirecciones.

Productos->>Cart: Productos seleccionados
Note right of Productos: Se reservan el stock<br/>solo se descuenta al<br/>completar el envio.

Cart->> Firebase: Guardar pedidos
Note right of Cart: El pedido se guarda en<br/>Firebase si ya existe<br/>solo se modifica.
```

Flow de datos al crear una nueva orden:

```mermaid
graph LR
A((Cart)) -- Pedido --> B(Guardar pedido)
A -- Comprobar --> C(Editar pedido)
B --> D{Firebase}
C --> D
```


## Animación, simulador.
![](LaCocina.gif)

