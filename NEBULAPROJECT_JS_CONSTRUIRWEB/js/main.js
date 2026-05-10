/* Bloque 1 */
// #1.1
const nombreEstudio = "Estudio Nebula";

// #1.2
const enlacesNav = [
    { texto: "Inicio", href: "#inicio" },
    { texto: "Servicios", href: "#servicios" },
    { texto: "Proyectos", href: "#proyectos" },
    { texto: "Contacto", href: "#contacto" }
];

// #1.3
const heroData = {
    textoPrincipal: "Transformamos ideas digitales",
    palabraDestacada: "digitales",
    descripcion: "Diseñamos y desarrollamos soluciones web a medida que impulsan tu negocio hacia el futuro con tecnología de vanguardia.",
    botonPrincipal: {
        texto: "Pedir presupuesto",
        href: "#contacto"
    },
    botonSecundario: {
        texto: "Ver trabajos",
        href: "#proyectos"
    }
};

// #1.4
const heroCajaData = {
    icono: "⚡",
    titulo: "Entrega en 7 días",
    subtitulo: " Pack básico + revisión"
}

// #1.5
const servicios = [
    {
        nombre: "Diseño Web",
        icono: "▦",
        descripcion: "Interfaces modernas centradas en la experiencia de usuario y la conversión."
    },
    {
        nombre: "Growth Hacking ",
        icono: "❈",
        descripcion: "Estrategias de crecimiento acelerado para startups y nuevos productos.",
        etiqueta: "NEW"
    },
    { 
        nombre: "Desarrollo", 
        icono: "‹›", 
        descripcion: "Código limpio, escalable y optimizado para motores de búsqueda." 
    }
];

// #1.6
const proyectos = [
    {
        titulo: "Redesign E-commerce Moda",
        descripcion: "Implementación completa de una nueva identidad visual para una marca de ropa sostenible. Aumentamos la conversión en un 40% gracias a una experiencia de checkout simplificada y una carga de imágenes optimizada.",
        href: "#"
    },
    {
        titulo: "Dashboard Financiero SaaS",
        descripcion: "Diseño de interfaz para una plataforma de gestión de activos. El reto principal fue simplificar la visualización de grandes volúmenes de datos en tiempo real sin perder rendimiento.",
        href: "#"
    }
]

// #1.7
const notaProyectos = {
    etiqueta: "NOTA (OVERFLOW)",
    parrafos: [
        "Este es el primer párrafo de texto suficientemente largo para que tenga sentido el overflow definido en el CSS. Es necesario que el contenido supere la altura máxima del contenedor.",
        "Este es el segundo párrafo de texto, también extenso, para asegurar que el scroll vertical aparezca correctamente dentro de la caja de notas de la sección de proyectos."
    ]
}

// #1.8
const recursos = [
    { texto: "Kit de UI Gratuito", href: "#kitUi" },
    { texto: "Guía de Tipografía", href: "#guiaTipografia" },
    { texto: "Checklist SEO 2025", href: "#checklistSeo" }
]

// #1.9
const horario = {
    icono: "◷",
    titulo: "Horario",
    textoPrincipal: "L–V: 9:00–14:00",
    textoAuxiliar: "Hora local (Madrid)"
}

// #1.10
const footerData = {
    copyright: "© 2025 Estudio Nebula",
    enlacesLegales: [
        { texto: "Aviso legal", href: "#" },
        { texto: "Privacidad", href: "#" }
    ]
}

/* Bloque 2 */
// #2
function crearLogo() {
    const logo = document.getElementById('logo');
    logo.textContent = nombreEstudio;
}

// #3
function crearNav() {
    let menuNav = document.querySelector("#menu-nav");
    let enlace, li;
    for (let enlaceNav of enlacesNav) {
        li = document.createElement("li");
        enlace = document.createElement("a");
        enlace.text = enlaceNav.texto;
        enlace.href = enlaceNav.href;
        enlace.className = "nav-link";
        li.appendChild(enlace);
        menuNav.appendChild(li);
    }
}

// #4
function crearHeroTexto() {
    let heroTexto = document.querySelector("#hero-texto");
    const h1 = document.createElement("h1");
    h1.textContent = heroData.textoPrincipal;

    const span = document.createElement("span");
    span.className = "highlight";
    span.textContent = heroData.palabraDestacada;

    const parrafo = document.createElement("p");
    parrafor.textContent = heroData.descripcion;
    parrafo.className = "descripcion";

    const div = document.createElement("div");
    div.className = "acciones"

    const enlacePrincipal = document.createElement("a");
    enlacePrincipal.textContent = heroData.botonPrincipal.texto;
    enlacePrincipal.href = heroData.botonPrincipal.href;
    enlacePrincipal.className = "btn btn-primario";

    const enlaceSecundario = document.createElement("a");
    enlaceSecundario.textContent = heroData.botonSecundario.texto;
    enlaceSecundario.href = heroData.botonSecundario.href;
    enlacePrincipal.className = "btn btn-secundario";

    div.appendChild(enlacePrincipal);
    div.appendChild(enlaceSecundario);

    h1.appendChild(span);
    heroTexto.appendChild(h1);
    heroTexto.appendChild(parrafo);
    heroTexto.appendChild(div);
}

// #5
function crearHeroCaja() {
    const heroCaja = document.getElementById("hero-caja");

    const span = document.createElement("span");
    span.className = "hero-icono";
    span.textContent = heroCajaData.icono;

    const titulo = document.createElement("h2");
    titulo.classname = "hero-titulo";
    titulo.textContent = heroCajaData.titulo;

    const subtexto = document.createElement("p");
    subtexto.classname = "hero-subtexto";
    subtexto.textContent = heroCajaData.subtitulo;

    heroCaja.append(span, titulo, subtexto);
}

// #6
function crearTarjetaServicio(servicio) {
    const tarjeta = document.createElement("article");
    tarjeta.className = "tarjeta";

    const span = document.createElement("span");
    span.textContent = servicio.icono;

    const nombre = document.createElement("h3");
    nombre.textContent = servicio.nombre;
    if (servicio.etiqueta) {
        const spanEtiqueta = document.createElement('span');
        spanEtiqueta.classList.add('nuevo');
        spanEtiqueta.textContent = servicio.etiqueta;
        h3.appendChild(spanEtiqueta);
    }

    const descripcion = document.createElement("p");
    descripcion.textContent = servicio.descripcion;

    tarjeta.append(span, nombre, descripcion);
}








function configurarEventoHero() {
    const btnPresupuesto = document.querySelector(".btn-primario");
    const heroCaja = document.getElementById("hero-caja");

    btnPresupuesto.addEventListener("click", (e) => {
        e.preventDefault();
        
        while (heroCaja.firstChild) {
            heroCaja.removeChild(heroCaja.firstChild);
        }

        const titulo = document.createElement("h2");
        titulo.textContent = "Solicitud iniciada";
        
        const mensaje = document.createElement("p");
        mensaje.textContent = `Te responderemos pronto en nuestro horario: ${horario.textoPrincipal}`;
        
        heroCaja.append(titulo, mensaje);
    });
}


function buscadorServicios() {
    const listaServicios = document.getElementById("lista-servicios");
    const contenedorServicios = document.getElementById("servicios");

    // Crear buscador
    const divBusqueda = document.createElement("div");
    const label = document.createElement("label");
    label.textContent = "Buscador: ";
    const inputBusqueda = document.createElement("input");
    inputBusqueda.type = "text";
    inputBusqueda.placeholder = "Escribe para filtrar...";

    divBusqueda.append(label, inputBusqueda);
    contenedorServicios.insertBefore(divBusqueda, listaServicios);

    inputBusqueda.addEventListener(keydown, (e) => {
        const filtro = e.target.value.toLowerCase();
        const tarjetas = document.querySelectorAll(".tarjeta");
        let encontrados = 0;

        tarjetas.forEach(t => {
            const coincide = t.textContent.toLowerCase().includes(filtro);
            t.style.display = coincide ? "block" : "none";
            if (coincide) encontrados++;
        });

        // Mensaje de aviso
        let aviso = document.getElementById("msg-vacio");
        if (encontrados === 0) {
            if (!aviso) {
                aviso = document.createElement("p");
                aviso.id = "msg-vacio";
                aviso.textContent = "No hay servicios que coincidan.";
                listaServicios.append(aviso);
            }
        } else if (aviso) {
            aviso.remove();
        }
    });
}