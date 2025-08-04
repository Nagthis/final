let productos = [];

// ✅ Cargar productos desde productos.json
async function cargarProductos() {
  try {
    const res = await fetch("productos.json");
    productos = await res.json();
    mostrarProductos();
  } catch (error) {
    console.error("Error al cargar productos:", error);
  }
}

// ✅ Mostrar productos con opción de filtro
function mostrarProductos(filtro = "") {
  const contenedor = document.getElementById("productosContainer");
  if (!contenedor) return;

  contenedor.innerHTML = "";

  const filtrados = productos.filter(p =>
    p.producto.toLowerCase().includes(filtro.toLowerCase())
  );

  filtrados.forEach(prod => {
    const card = document.createElement("div");
    card.className = "col-md-4 mb-4";
    card.innerHTML = `
      <div class="card h-100">
        <div class="card-body">
          <h5 class="card-title">${prod.producto}</h5>
          <p class="card-text">$${prod.precio}</p>
          <button class="btn btn-success" onclick="agregarAlCarrito(${prod.id})" data-bs-toggle="tooltip" data-bs-title="Agregar al carrito">Agregar</button>
        </div>
      </div>
    `;
    contenedor.appendChild(card);
  });

  // Habilitar tooltips (Bootstrap)
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  tooltipTriggerList.forEach(tooltipTriggerEl => {
    new bootstrap.Tooltip(tooltipTriggerEl);
  });
}

// ✅ Agregar producto al carrito y guardar en localStorage
function agregarAlCarrito(id) {
  const producto = productos.find(p => p.id === id);
  if (!producto) return;

  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  carrito.push(producto);
  localStorage.setItem("carrito", JSON.stringify(carrito));

  // ✅ Redirige automáticamente al carrito
  window.location.href = "carrito.html";
}


// ✅ Mostrar productos del carrito
function actualizarCarrito() {
  const lista = document.getElementById("listaCarrito");
  const total = document.getElementById("totalCarrito");
  if (!lista || !total) return;

  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  lista.innerHTML = "";

  let totalPrecio = 0;

  carrito.forEach((item, index) => {
    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items-center";
    li.innerHTML = `
      ${item.producto} - $${item.precio}
      <button class="btn btn-sm btn-danger" onclick="eliminarDelCarrito(${index})">Eliminar</button>
    `;
    totalPrecio += item.precio;
    lista.appendChild(li);
  });

  total.textContent = totalPrecio;
}

// ✅ Eliminar un producto del carrito
function eliminarDelCarrito(index) {
  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  carrito.splice(index, 1);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  actualizarCarrito();
}

// ✅ Vaciar el carrito completo
function vaciarCarrito() {
  localStorage.removeItem("carrito");
  actualizarCarrito();
}

// ✅ Mostrar cliente guardado
function cargarCliente() {
  const datos = JSON.parse(localStorage.getItem("cliente"));
  const el = document.getElementById("nombreCliente");
  if (datos && el) {
    el.textContent = `${datos.nombre} ${datos.apellido}`;
  }
}

// ✅ Guardar cliente (se usa directamente en cliente.html)
function guardarCliente(nombre, apellido) {
  const cliente = { nombre, apellido };
  localStorage.setItem("cliente", JSON.stringify(cliente));
}
