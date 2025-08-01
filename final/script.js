// Datos de productos
const productos = [
  { id: 1, nombre: "Reloj", precio: 300 },
  { id: 2, nombre: "Audifonos", precio: 200 },
  { id: 3, nombre: "Audifonos", precio: 100 },
];

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// Mostrar productos
function mostrarProductos(filtro = "") {
  const container = document.getElementById("productosContainer");
  container.innerHTML = "";
  productos
    .filter(p => p.nombre.toLowerCase().includes(filtro.toLowerCase()))
    .forEach(p => {
      container.innerHTML += `
        <div class="col-md-4 mb-3">
          <div class="card h-100">
            <div class="card-body">
              <h5 class="card-title">${p.nombre}</h5>
              <p class="card-text">$${p.precio}</p>
              <button class="btn btn-success" onclick="agregarAlCarrito(${p.id})">Agregar al carrito</button>
            </div>
          </div>
        </div>`;
    });
}

// Agregar al carrito
function agregarAlCarrito(id) {
  const producto = productos.find(p => p.id === id);
  carrito.push(producto);
  guardarCarrito();
  actualizarCarrito();
}

// Guardar carrito en localStorage
function guardarCarrito() {
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

// Actualizar carrito en la vista
function actualizarCarrito() {
  const lista = document.getElementById("listaCarrito");
  const total = document.getElementById("totalCarrito");
  lista.innerHTML = "";

  carrito.forEach((item, index) => {
    lista.innerHTML += `
      <li class="list-group-item d-flex justify-content-between align-items-center">
        ${item.nombre} - $${item.precio}
        <button class="btn btn-sm btn-danger" onclick="eliminarProducto(${index})">Eliminar</button>
      </li>`;
  });

  const suma = carrito.reduce((acc, item) => acc + item.precio, 0);
  total.textContent = suma;
}

// Eliminar un producto del carrito
function eliminarProducto(index) {
  carrito.splice(index, 1);
  guardarCarrito();
  actualizarCarrito();
}

// Vaciar el carrito
function vaciarCarrito() {
  carrito = [];
  guardarCarrito();
  actualizarCarrito();
}

// Filtro de productos
document.getElementById("filtro").addEventListener("input", e => {
  mostrarProductos(e.target.value);
});

// Cliente
const clienteForm = document.getElementById("clienteForm");
const nombreClienteSpan = document.getElementById("nombreCliente");

// Cargar cliente desde localStorage
function cargarCliente() {
  const cliente = JSON.parse(localStorage.getItem("cliente"));
  if (cliente && cliente.nombre && cliente.apellido) {
    nombreClienteSpan.textContent = `${cliente.nombre} ${cliente.apellido}`;
  }
}

// Guardar cliente
clienteForm.addEventListener("submit", e => {
  e.preventDefault();
  const nombre = document.getElementById("nombre").value.trim();
  const apellido = document.getElementById("apellido").value.trim();
  const cliente = { nombre, apellido };
  localStorage.setItem("cliente", JSON.stringify(cliente));
  nombreClienteSpan.textContent = `${nombre} ${apellido}`;
  clienteForm.reset();
});

// Inicializar al cargar
document.addEventListener("DOMContentLoaded", () => {
  const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  tooltipTriggerList.map(el => new bootstrap.Tooltip(el));
  mostrarProductos();
  actualizarCarrito();
  cargarCliente();
});
