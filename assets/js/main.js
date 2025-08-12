// Espera a que el DOM esté listo
document.addEventListener('DOMContentLoaded', function () {
    // Botón para abrir el menú lateral
    const menuToggle = document.getElementById('menu-toggle');
    // Botón para cerrar el menú lateral
    const closeMenu = document.getElementById('close-menu');
    // Botón para abrir el carrito lateral
    const cartToggle = document.getElementById('cart-toggle');
    // Botón para cerrar el carrito lateral
    const closeCart = document.getElementById('close-cart');
    // Menú lateral de navegación
    const sideMenu = document.getElementById('side-menu');
    // Menú lateral del carrito
    const cartMenu = document.getElementById('cart-menu');
    // Fondo oscuro al abrir paneles laterales
    const overlay = document.getElementById('overlay');
    // Boton Ver carrito
    const seeTheCar = document.getElementById("verCarrito");

    const headerContainer = document.getElementById("header-container")
    const letrasNav = document.querySelectorAll(".letrasNavbar")
    let distanciaScroll = 0


    // FUNCIONAMIENTO DE DESPLAZAMIENTO DEL CARRUSEL
    const carousels = document.querySelectorAll(".product-carousel");

    carousels.forEach(carousel => {
    const btnAtras = carousel.querySelector(".btnAtras");
    const btnAdelante = carousel.querySelector(".btnAdelante");
    const productGrid = carousel.querySelector(".product-grid");
    const productCards = productGrid.querySelectorAll(".product-card");
    const totalProductos = productCards.length;
    const productosVisibles = 4;
    let pagina = 0;
    const totalPaginas = Math.ceil(totalProductos / productosVisibles);

    productGrid.style.width = `${(100 / productosVisibles) * totalProductos}%`;
    productCards.forEach(card => {
        card.style.width = `${100 / totalProductos}%`;
    });

    function mostrarCara() {
        const porcentaje = 100 * pagina;
        productGrid.style.transform = `translateX(-${porcentaje}%)`;
    }

    btnAdelante.addEventListener("click", () => {
        if (pagina < totalPaginas - 1) {
            pagina++;
            mostrarCara();
        }
    });

    btnAtras.addEventListener("click", () => {
        if (pagina > 0) {
            pagina--;
            mostrarCara();
        }
    });

    mostrarCara();
});

    // CAMBIO DE COLOR DE LA NAVBAR SCROLLEANDO
    window.addEventListener("scroll", () => {
        distanciaScroll = document.documentElement.scrollTop

        if (distanciaScroll > 0) {
            headerContainer.style.backgroundColor = "white"
            letrasNav.forEach(element => {
                element.style.color = "black"
            });


        }
        if (distanciaScroll == 0) {
            headerContainer.style.backgroundColor = "transparent"
            letrasNav.forEach(element => {
                element.style.color = "white"
            });

        }
    })

    // CAMBIO DE COLOR DE LA NAVBAR CON HOVER 
    document.addEventListener("mousemove", (e) => {
        const dentro = headerContainer.contains(e.target)
        if (distanciaScroll == 0) {
            if (dentro) {
                headerContainer.style.backgroundColor = "white"
                letrasNav.forEach(element => {
                    element.style.color = "black"
                });

            } else {
                headerContainer.style.backgroundColor = "transparent"
                letrasNav.forEach(element => {
                    element.style.color = "white"
                });
            }
        }
    })

    // Función para abrir un panel lateral
    function openNav(menu) {
        menu.style.width = '350px';
        overlay.style.display = 'block';
    }

    // Función para cerrar un panel lateral
    function closeNav(menu) {
        menu.style.width = '0';
        overlay.style.display = 'none';
    }

    // Abre el menú lateral al hacer clic en el botón
    menuToggle.addEventListener('click', () => openNav(sideMenu));
    // Abre el carrito lateral al hacer clic en el botón
    cartToggle.addEventListener('click', () => openNav(cartMenu));
    // Boton Ver carrito
    seeTheCar.addEventListener('click', () => openNav(cartMenu));
    // Cierra el menú lateral al hacer clic en el botón cerrar
    closeMenu.addEventListener('click', () => closeNav(sideMenu));
    // Cierra el carrito lateral al hacer clic en el botón cerrar
    closeCart.addEventListener('click', () => closeNav(cartMenu));

    // Cierra ambos paneles al hacer clic en el overlay
    overlay.addEventListener('click', () => {
        closeNav(sideMenu);
        closeNav(cartMenu);
    });


// FUNCIONAMIENTO DE LUPA DE BUSCAR 
    document.querySelector('.buscar').addEventListener('click', () => {
        const campo = document.getElementById('campo-buscar');
        campo.style.display = (campo.style.display === 'none' || campo.style.display === '')
            ? 'inline-block'
            : 'none';
        campo.focus();
    });
    document.getElementById('campo-buscar').addEventListener('blur', function () {
        this.style.display = 'none';
    });
});


