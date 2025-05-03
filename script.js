// C1 LIDIA. Crear vector dinámico para almacenar productos.
let vectorProductos = [];

// C2 LIDIA. Crear función para agregar productos al vector.
function agregarProducto(id, nombre, precio, stock) {
    let producto = {
        id: id,
        nombre: nombre,
        precio: precio,
        stock: stock
    };
    vectorProductos.push(producto);
    console.log("Producto agregado:", producto);
}

// Aquí agregamos productos
agregarProducto(1, "A", 20, 63);
agregarProducto(2, "B", 30, 28);
agregarProducto(3, "C", 35, 84);
agregarProducto(4, "D", 10, 120);  
agregarProducto(5, "E", 50, 100);

// C3 LIDIA. Crear función para eliminar productos del vector.
function eliminarProducto(id) {
    for (let i = 0; i < vectorProductos.length; i++) {
        if (vectorProductos[i].id === id) {
            vectorProductos.splice(i, 1);
            console.log("Producto eliminado:", id);
            return;
        }
    }
    console.log("Producto no encontrado:", id);
}

// C4 LIDIA. Crear función para actualizar stock.
function actualizarStock(id, nuevoStock) {
    for (let producto of vectorProductos) {
        if (producto.id === id) {
            producto.stock = nuevoStock;
            console.log("Stock actualizado:", id, "Nuevo stock:", nuevoStock);
            return;
        }
    }
    console.log("Producto no encontrado:", id);
}
