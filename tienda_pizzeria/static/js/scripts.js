const carrito = {};

function agregarCarrito(pizza) {
    // Si la pizza ya está en el carrito, aumenta la cantidad
    if (carrito[pizza]) {
        carrito[pizza].cantidad++;
    } else {
        // Si no está, añádela con cantidad 1
        carrito[pizza] = { cantidad: 1 };
    }

    mostrarCarrito();
}

function mostrarCarrito() {
    const listaCarrito = document.getElementById('lista-carrito');
    
    // Limpiar el carrito antes de actualizar
    listaCarrito.innerHTML = '';

    // Iterar sobre las pizzas en el carrito
    Object.keys(carrito).forEach(pizza => {
        // Si ya existe un elemento para esta pizza, actualiza la cantidad
        let pizzaDiv = document.getElementById(pizza);
        if (pizzaDiv) {
            pizzaDiv.querySelector('.cantidad').textContent = `Cantidad: ${carrito[pizza].cantidad}`;
        } else {
            // Si no existe, crea un nuevo elemento para la pizza
            const div = document.createElement('div');
            div.className = 'list-group-item d-flex justify-content-between align-items-center';
            div.id = pizza; // Usar el nombre de la pizza como ID para referencia

            const nombre = document.createElement('span');
            nombre.textContent = pizza;

            const cantidad = document.createElement('span');
            cantidad.className = 'cantidad';
            cantidad.textContent = `Cantidad: ${carrito[pizza].cantidad}`;

            // Añadir nombre y cantidad al div
            div.appendChild(nombre);
            div.appendChild(cantidad);

            // Agregar el div al carrito
            listaCarrito.appendChild(div);
        }
    });
}
