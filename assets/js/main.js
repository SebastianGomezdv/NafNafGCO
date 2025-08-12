// Espera a que el DOM esté listo
document.addEventListener('DOMContentLoaded', function () {
    // Elementos del DOM
    const menuToggle = document.getElementById('menu-toggle');
    const closeMenu = document.getElementById('close-menu');
    const cartToggle = document.getElementById('cart-toggle');
    const closeCart = document.getElementById('close-cart');
    const sideMenu = document.getElementById('side-menu');
    const cartMenu = document.getElementById('cart-menu');
    const overlay = document.getElementById('overlay');
    // Boton Ver carrito
    const seeTheCar = document.getElementById("verCarrito");

    const headerContainer = document.getElementById("header-container");
    const letrasNav = document.querySelectorAll(".letrasNavbar");
    let distanciaScroll = 0;


    // FUNCIONAMIENTO DE DESPLAZAMIENTO DEL CARRUSEL
    const carousels = document.querySelectorAll(".product-carousel");

    // Detectar si estamos en la página de producto
    const esPaginaProducto = document.body.classList.contains('pagina-producto');

    // Ajustar margen superior del main según altura del header
    const mainContent = document.querySelector("main");
    if (headerContainer && mainContent) {
        const headerHeight = headerContainer.offsetHeight;
        mainContent.style.paddingTop = headerHeight + "px";
    }


    // ----- CARRUSEL -----
    if (carousels.length > 0) {
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

            if (btnAdelante) {
                btnAdelante.addEventListener("click", () => {
                    if (pagina < totalPaginas - 1) {
                        pagina++;
                        mostrarCara();
                    }
                });
            }

            if (btnAtras) {
                btnAtras.addEventListener("click", () => {
                    if (pagina > 0) {
                        pagina--;
                        mostrarCara();
                    }
                });
            }

            mostrarCara();
        });
    }

    // ----- SCROLL HEADER -----
    if (!esPaginaProducto && headerContainer && letrasNav.length > 0) {
        // Solo aplicar efecto de scroll si NO estamos en página de producto
        window.addEventListener("scroll", () => {
            distanciaScroll = document.documentElement.scrollTop;
            if (distanciaScroll > 0) {
                headerContainer.style.backgroundColor = "white";
                letrasNav.forEach(element => element.style.color = "black");
            } else {
                headerContainer.style.backgroundColor = "transparent";
                letrasNav.forEach(element => element.style.color = "white");
            }
        });

        document.addEventListener("mousemove", (e) => {
            const dentro = headerContainer.contains(e.target);
            if (distanciaScroll === 0) {
                if (dentro) {
                    headerContainer.style.backgroundColor = "white";
                    letrasNav.forEach(element => element.style.color = "black");
                } else {
                    headerContainer.style.backgroundColor = "transparent";
                    letrasNav.forEach(element => element.style.color = "white");
                }
            }
        });
    } else if (esPaginaProducto && headerContainer && letrasNav.length > 0) {
        // Si estamos en página de producto, siempre header negro con letras blancas
        headerContainer.style.backgroundColor = "black";
        letrasNav.forEach(element => element.style.color = "white");
    }

    // ----- PANEL LATERAL -----
    function openNav(menu) {
        if (menu) {
            menu.style.width = '350px';
            if (overlay) overlay.style.display = 'block';
        }
    }

    function closeNav(menu) {
        if (menu) {
            menu.style.width = '0';
            if (overlay) overlay.style.display = 'none';
        }
    }

    if (menuToggle) menuToggle.addEventListener('click', () => openNav(sideMenu));
    if (cartToggle) cartToggle.addEventListener('click', () => openNav(cartMenu));
    if (closeMenu) closeMenu.addEventListener('click', () => closeNav(sideMenu));
    if (closeCart) closeCart.addEventListener('click', () => closeNav(cartMenu));
    if (overlay) overlay.addEventListener('click', () => {
        closeNav(sideMenu);
        closeNav(cartMenu);
    });

    // ----- BUSCADOR -----
    const buscarBtn = document.querySelector('.buscar');
    const campoBuscar = document.getElementById('campo-buscar');

    if (buscarBtn && campoBuscar) {
        buscarBtn.addEventListener('click', () => {
            campoBuscar.style.display = (campoBuscar.style.display === 'none' || campoBuscar.style.display === '')
                ? 'inline-block'
                : 'none';
            campoBuscar.focus();
        });

        campoBuscar.addEventListener('blur', function () {
            this.style.display = 'none';
        });
    }
});