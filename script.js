// Seleccionamos los elementos necesarios
const cart = [];
const orderButtons = document.querySelectorAll('.order-button');
const contactForm = document.querySelector('.contact form');

// Función para agregar productos al carrito
orderButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        // Obtenemos la información del producto
        const productElement = event.target.closest('.product');
        const productName = productElement.querySelector('h3').innerText;
        const productPrice = productElement.querySelector('p').innerText;

        // Creamos el objeto del producto
        const product = {
            name: productName,
            price: productPrice
        };

        // Agregamos el producto al carrito
        cart.push(product);

        // Mostrar mensaje de confirmación
        alert(`${productName} ha sido agregado al carrito.`);
    });
});

// Función para validar y enviar el formulario de contacto
contactForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Evita que el formulario se envíe

    // Obtenemos los valores de los campos
    const name = contactForm.querySelector('input[name="nombre"]').value.trim();
    const email = contactForm.querySelector('input[name="email"]').value.trim();
    const message = contactForm.querySelector('textarea[name="mensaje"]').value.trim();

    // Validación básica
    if (name === '' || email === '' || message === '') {
        alert('Por favor, completa todos los campos.');
        return;
    }

    // Mostrar mensaje de éxito
    alert('Gracias por contactarnos, ' + name + '. Hemos recibido tu mensaje.');
    contactForm.reset(); // Limpiar el formulario
});
