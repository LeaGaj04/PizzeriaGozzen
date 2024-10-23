const carrito = [];

function agregarCarrito(pizza) {
    carrito.push(pizza);
    mostrarCarrito();
}

function mostrarCarrito() {
    const listaCarrito = document.getElementById('lista-carrito');
    listaCarrito.innerHTML = '';

    carrito.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `${item} - Cantidad: ${carrito.filter(p => p === item).length}`;
        listaCarrito.appendChild(li);
    });
}
