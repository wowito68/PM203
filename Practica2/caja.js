import { catalogo, productos } from "./catalogo.js";
let totalAcumulado = 0;
const listaPedidos = [];

function agregarPedido(id) {
    const producto = catalogo.productos.find((p) => p.id === id);

    if (producto) {
        const cantidad = parseInt(prompt(`¿Cuantas unidades de ${producto.nombre} deseas?`), 10);

        if (!isNaN(cantidad) && cantidad > 0) {
            const subtotal = producto.precio * cantidad;
            totalAcumulado += subtotal;
            console.log(`Agregado: ${producto.nombre} x${cantidad} - Subtotal: $${subtotal}`);

            listaPedidos.push({
                nombre: producto.nombre,
                cantidad: cantidad,
                subtotal: subtotal
            });
        }
    }
}



function mostrarPedidos() {
    console.log("=== LISTA DE PEDIDOS ===");

    listaPedidos.forEach((pedido, index) => {
        console.log(
            `${index + 1}. ${pedido.nombre} x${pedido.cantidad} - $${pedido.subtotal}`
        );
    });

    console.log("TOTAL ACUMULADO: $" + totalAcumulado);
}
