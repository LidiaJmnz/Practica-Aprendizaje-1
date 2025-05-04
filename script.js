let vectorProductos = [];

// Agrega un producto al vector y actualiza el DOM
function agregarProducto(id, nombre, precio, stock) {
  const producto = { id, nombre, precio, stock };
  vectorProductos.push(producto);
  console.log("Producto agregado:", producto);
  renderizarProductos();
}

// Elimina un producto por ID
function eliminarProducto(id) {
  vectorProductos = vectorProductos.filter(producto => producto.id !== id);
  console.log("Producto eliminado:", id);
  renderizarProductos();
}

// Actualiza el stock de un producto por ID
function actualizarStock(id, nuevoStock) {
  for (let producto of vectorProductos) {
    if (producto.id === id) {
      producto.stock = nuevoStock;
      console.log("Stock actualizado:", id, "Nuevo stock:", nuevoStock);
      break;
    }
  }
  renderizarProductos();
}

// Renderiza la lista de productos en la interfaz
function renderizarProductos() {
  const lista = document.getElementById("lista-productos");
  lista.innerHTML = "";

  vectorProductos.forEach(producto => {
    const div = document.createElement("div");
    div.classList.add("producto-item");
    div.innerHTML = `
      <strong>${producto.nombre}</strong> (ID: ${producto.id})<br>
      Precio:${producto.precio}€<br>
      Stock: <input type="number" value="${producto.stock}" id="stock-${producto.id}" style="width: 60px;" />
      <button onclick="guardarStock(${producto.id})">Guardar Stock</button>
      <button onclick="eliminarProducto(${producto.id})">Eliminar</button>
    `;
    lista.appendChild(div);
  });
}

// Botón para guardar el stock nuevo
function guardarStock(id) {
  const input = document.getElementById(`stock-${id}`);
  const nuevoStock = parseInt(input.value);
  if (!isNaN(nuevoStock)) {
    actualizarStock(id, nuevoStock);
  } else {
    alert("Stock inválido.");
  }
}

// Manejador del botón "Agregar Producto"
document.getElementById("agregarProducto").addEventListener("click", () => {
  const nombre = document.getElementById("nombreProducto").value.trim();
  const precio = parseFloat(document.getElementById("precioProducto").value);
  const stock = parseInt(document.getElementById("stockProducto").value);

  if (!nombre || isNaN(precio) || isNaN(stock)) {
    alert("Por favor, completa todos los campos correctamente.");
    return;
  }

  const nuevoId = vectorProductos.length
    ? Math.max(...vectorProductos.map(p => p.id)) + 1
    : 1;

  agregarProducto(nuevoId, nombre, precio, stock);

  // Limpiar campos
  document.getElementById("nombreProducto").value = "";
  document.getElementById("precioProducto").value = "";
  document.getElementById("stockProducto").value = "";
});

// Productos iniciales
agregarProducto(1, "Producto 1", 20, 63);
agregarProducto(2, "Producto 2", 30, 28);
agregarProducto(3, "Producto 3", 35, 84);
agregarProducto(4, "Producto 4", 10, 120);
agregarProducto(5, "Producto 5", 50, 100);
