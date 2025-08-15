const productos = [
    // Productos destacados
    {
        id: 1,
        nombre: "Camiseta manga corta",
        precio: 149900,
        imagen: "../assets/media/images/producto1.webp",
        descripcion: "Camiseta manga corta cómoda y versátil para cualquier ocasión.",
        talla: ["S", "M", "L"]
    },
    {
        id: 2,
        nombre: "Chaqueta tipo Trucker en denim",
        precio: 299900,
        imagen: "../assets/media/images/producto2.webp",
        descripcion: "Chaqueta tipo Trucker en denim resistente y moderna.",
        talla: ["S", "M", "L"]
    },
    {
        id: 3,
        nombre: "Pantalón Wide leg tipo cargo",
        precio: 309900,
        imagen: "../assets/media/images/producto3.webp",
        descripcion: "Pantalón Wide leg tipo cargo, ideal para un look urbano.",
        talla: ["S", "M", "L"]
    },
    {
        id: 4,
        nombre: "Camisa manga corta con bordados",
        precio: 179900,
        imagen: "../assets/media/images/producto4.webp",
        descripcion: "Camisa manga corta con detalles bordados elegantes.",
        talla: ["S", "M", "L"]
    },
    {
        id: 5,
        nombre: "Vestido largo estampado",
        precio: 299900,
        imagen: "../assets/media/images/producto5.webp",
        descripcion: "Vestido largo estampado perfecto para eventos especiales.",
        talla: ["S", "M", "L"]
    },
    {
        id: 6,
        nombre: "Vestido largo casual",
        precio: 299900,
        imagen: "../assets/media/images/producto6.webp",
        descripcion: "Vestido largo casual, cómodo y estilizado.",
        talla: ["S", "M", "L"]
    },
    {
        id: 7,
        nombre: "Camisa tejida",
        precio: 219900,
        imagen: "../assets/media/images/producto7.webp",
        descripcion: "Camisa tejida de alta calidad para un look formal.",
        talla: ["S", "M", "L"]
    },
    {
        id: 8,
        nombre: "Buzo tejido",
        precio: 269900,
        imagen: "../assets/media/images/producto8.webp",
        descripcion: "Buzo tejido cálido y moderno para el invierno.",
        talla: ["S", "M", "L"]
    },

    // Más vendidos
    {
        id: 9,
        nombre: "Pantalón Palazzo de tiro alto",
        precio: 239900,
        imagen: "../assets/media/images/masVendido1.webp",
        descripcion: "Pantalón Palazzo de tiro alto para un look elegante.",
        talla: ["S", "M", "L"]
    },
    {
        id: 10,
        nombre: "Camiseta manga sisa tipo córse",
        precio: 179900,
        imagen: "../assets/media/images/masVendido2.webp",
        descripcion: "Camiseta manga sisa tipo corsé para un estilo moderno.",
        talla: ["S", "M", "L"]
    },
    {
        id: 11,
        nombre: "Camiseta manga corta clásica",
        precio: 149900,
        imagen: "../assets/media/images/masVendido3.webp",
        descripcion: "Camiseta manga corta clásica, ideal para uso diario.",
        talla: ["S", "M", "L"]
    },
    {
        id: 12,
        nombre: "Camiseta sisa de tela acanalada",
        precio: 99900,
        imagen: "../assets/media/images/masVendido4.webp",
        descripcion: "Camiseta sisa de tela acanalada, ligera y fresca.",
        talla: ["S", "M", "L"]
    },
    {
        id: 13,
        nombre: "Camiseta con lentejuelas",
        precio: 179900,
        imagen: "../assets/media/images/masVendido5.webp",
        descripcion: "Camiseta con lentejuelas para un look brillante y festivo.",
        talla: ["S", "M", "L"]
    },
    {
        id: 14,
        nombre: "Camisa manga sisa elegante",
        precio: 199900,
        imagen: "../assets/media/images/masVendido6.webp",
        descripcion: "Camisa manga sisa elegante, ideal para ocasiones especiales.",
        talla: ["S", "M", "L"]
    },
    {
        id: 15,
        nombre: "Chaqueta con botones",
        precio: 369900,
        imagen: "../assets/media/images/masVendido7.webp",
        descripcion: "Chaqueta con botones, elegante y abrigada.",
        talla: ["S", "M", "L"]
    },
    {
        id: 16,
        nombre: "Camisa manga tiras con escote",
        precio: 229900,
        imagen: "../assets/media/images/masVendido8.webp",
        descripcion: "Camisa manga tiras con escote sofisticada y moderna.",
        talla: ["S", "M", "L"]
    },
    {
        id: 17,
        nombre: "Camiseta de pretinero",
        precio: 149900,
        imagen: "../assets/media/images/masVendido9.webp",
        descripcion: "Camiseta de pretinero casual y versátil.",
        talla: ["S", "M", "L"]
    },
    {
        id: 18,
        nombre: "Pantalón Relax tiro alto",
        precio: 279900,
        imagen: "../assets/media/images/masVendido10.webp",
        descripcion: "Pantalón Relax tiro alto cómodo y elegante.",
        talla: ["S", "M", "L"]
    },
    {
        id: 19,
        nombre: "Chaqueta biker tipo cuero",
        precio: 299900,
        imagen: "../assets/media/images/masVendido11.webp",
        descripcion: "Chaqueta biker tipo cuero para un estilo atrevido.",
        talla: ["S", "M", "L"]
    },
    {
        id: 20,
        nombre: "Camisa tejida",
        precio: 209900,
        imagen: "../assets/media/images/masVendido12.webp",
        descripcion: "Camisa tejida ligera para climas frescos.",
        talla: ["S", "M", "L"]
    },

    // Nuevos
    {
        id: 21,
        nombre: "Blusa blanca",
        precio: 189900,
        descuento: 0,
        descripcion: "Blusa satinada con mangas y corte elegante, ideal para ocasiones formales o casuales.",
        imagen: "../assets/media/images/producto9.webp",
        talla: ["S", "M", "L"]
    },
    {
        id: 22,
        nombre: "Buzo tejido moderno",
        precio: 329900,
        descuento: 0,
        descripcion: "Buzo tejido moderno, confeccionado con hilo suave y diseño actual, ideal para combinar comodidad y estilo en cualquier ocasión.",
        imagen: "../assets/media/images/producto10.webp",
        talla: ["S", "M", "L"]
    },
    {
        id: 23,
        nombre: "Chaqueta tipo Trucker",
        precio: 249900,
        descuento: 0,
        descripcion: "Chaqueta tipo Trucker, clásica y versátil, con corte recto, bolsillos frontales y detalles que aportan un estilo casual y atemporal.",
        imagen: "../assets/media/images/producto11.webp",
        talla: ["S", "M", "L"]
    },
    {
        id: 24,
        nombre: "Camisa manga larga",
        precio: 179900,
        descuento: 0,
        descripcion: "Camisa de manga larga, elegante y versátil, confeccionada en tela ligera para brindar comodidad y estilo en cualquier ocasión.",
        imagen: "../assets/media/images/producto12.webp",
        talla: ["S", "M", "L"]
    }
];
