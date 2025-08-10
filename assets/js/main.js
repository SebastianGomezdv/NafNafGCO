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

    const headerContainer = document.getElementById("header-container")
    const letrasNav = document.querySelectorAll(".letrasNavbar")
    let distanciaScroll = 0

    const carousels = document.querySelectorAll(".product-carousel");

carousels.forEach(carousel => {
    const btnAtras = carousel.querySelector(".btnAtras");
    const btnAdelante = carousel.querySelector(".btnAdelante");
    const productGrid = carousel.querySelector(".product-grid");
    const totalProductos = productGrid.querySelectorAll(".product-card").length;
    const productosVisibles = 1;
    let index = 0;

    function mostrarCara() {
        productGrid.style.transform = `translateX(-${index * 100}%)`;
        productGrid.style.transition = "transform 0.5s ease-in-out";
    }

    btnAdelante.addEventListener("click", () => {
        if (index < totalProductos - productosVisibles) {
            index++;
            mostrarCara();
        }
    });

    btnAtras.addEventListener("click", () => {
        if (index > 0) {
            index--;
            mostrarCara();
        }
    });
});

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

    // Cierra el menú lateral al hacer clic en el botón cerrar
    closeMenu.addEventListener('click', () => closeNav(sideMenu));
    // Cierra el carrito lateral al hacer clic en el botón cerrar
    closeCart.addEventListener('click', () => closeNav(cartMenu));

    // Cierra ambos paneles al hacer clic en el overlay
    overlay.addEventListener('click', () => {
        closeNav(sideMenu);
        closeNav(cartMenu);
    });

    document.querySelector('.buscar').addEventListener('click', () => {
  const campo = document.getElementById('campo-buscar');
  campo.style.display = (campo.style.display === 'none' || campo.style.display === '') 
    ? 'inline-block' 
    : 'none';
  campo.focus();
});
    document.getElementById('campo-buscar').addEventListener('blur', function() {
        this.style.display = 'none';
    });
});

