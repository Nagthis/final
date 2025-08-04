🛒 MiTienda - Tienda en Línea con HTML, Bootstrap y JavaScript
Una tienda web responsiva creada con HTML, CSS, Bootstrap y JavaScript. Permite al usuario navegar productos, agregarlos al carrito, ver detalles del cliente, y almacenar datos usando Local Storage.

📁 Estructura del Proyecto

📦 MiTienda/

│
├── index.html           # Página principal con carrusel
├── productos.html       # Página de productos con cards y filtro
├── carrito.html         # Carrito de compras
├── cliente.html         # Página de perfil del cliente
├── productos.json       # Archivo con datos de productos
├── script.js            # Lógica JS para manejo de productos y carrito
├── style.css            # Estilos personalizados
├── /img/                # Imágenes de productos (reloj, audífonos, etc.)
└── README.md            # Este archivo

✅ Funcionalidades Implementadas
Diseño responsivo con Bootstrap 5.
Carrusel automático centrado en pantalla que redirige a productos al hacer clic.
Navbar con enlaces a secciones: Productos, Carrito, Perfil.
Footer fijo al fondo, con íconos de redes sociales (usando Bootstrap Icons).
Listado de productos desde productos.json mediante fetch().
Filtro en tiempo real para buscar productos por nombre.
Agregar al carrito y almacenamiento persistente con localStorage.
Redirección automática al carrito al agregar un producto.
Eliminar productos individuales del carrito.
Vaciar el carrito con un solo botón.
Calcular precio total automáticamente.
Formulario de cliente para capturar nombre y apellido y mostrarlo en la sección perfil.

📦 Datos de productos (productos.json)

json
[
  { "id": 1, "producto": "reloj", "precio": 300 },
  { "id": 2, "producto": "Audifonos", "precio": 200 },
  { "id": 3, "producto": "Audifonos", "precio": 100 }
]

🛠 Tecnologías Utilizadas
HTML5
CSS3
Bootstrap 5.3
JavaScript (ES6)
Local Storage (para persistencia de carrito y usuario)

Bootstrap Icons

🚀 Cómo usar el proyecto
Clona el repositorio o descarga los archivos:

git clone https://github.com/tuusuario/mitienda.git
cd mitienda
Abre index.html en tu navegador.

Usa la tienda:
Navega productos
Agrega al carrito
Revisa el total
Ingresa tu nombre para verlo en perfil

📌 Notas
No requiere backend ni servidor.
100% funcional solo en el navegador.
Compatible con dispositivos móviles, tablets y escritorio.

Grupo 4
Jose Luis Chavez
Lizzette Perez
Felipe Diaz
Cristian Blanco

Camilo Jiménez
