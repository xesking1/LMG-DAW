/* Dades obligatòries */
// Dades generals
const dadesGenerals = {
    nom: "Aula Pixel",
    any: "2026"
}

// Navegació
const enllacosNav = [
    { text: "Inici", href: "#inici" },
    { text: "Tallers", href: "#tallers" },
    { text: "Projectes", href: "#projectes" },
    { text: "Contacte", href: "#contacte" }
]

// Hero
const heroData = {
    titol: "Aprèn creant projectes digitals",
    paraulaDestacada: "digitals",
    descripcio: "Tallers pràctics per aprendre disseny web, programació creativa i creació de continguts digitals des del primer dia.",
    botoPrincipal: {
        text: "Vull inscriure’m",
        href: "#contacte"
    },
    botoSecundari: {
        text: "Veure projectes",
        href: "#projectes"
    }
}

// Targeta destacada del hero
const heroDestacada = {
    icona: "✦",
    titol: "Places limitades",
    subtítol: "Grups reduïts de 12 persones",
    textAuxiliar: "Proper inici: 15 d’abril"
}

// Tallers
const tallers = [
    {
        nom: "Disseny Web Inicial",
        categoria: "web",
        durada: 12,
        icona: "▦",
        descripcio: "Aprèn a crear pàgines web senzilles amb estructura clara i estil visual coherent.",
        etiqueta: "NOU"
    },
    {
        nom: "Programació Creativa",
        categoria: "programació",
        durada: 15,
        icona: "⌘",
        descripcio: "Utilitza JavaScript per crear petites experiències interactives al navegador."
    },
    {
        nom: "Contingut Digital",
        categoria: "contingut",
        durada: 10,
        icona: "◎",
        descripcio: " Crea peces visuals i textos digitals per comunicar millor les teves idees.",
        etiqueta: "POPULAR"
    },
    {
        nom: "Portafoli Professional",
        categoria: "web",
        durada: 8,
        icona: "◈",
        descripcio: "Organitza els teus projectes en una miniweb personal clara i atractiva."
    }
];

/* Projectes */
const projectes = [
    {
        nom: "Landingn page per a una cafeteria local",
        categoria: "web",
        descripcio: "Pàgina de presentació creada per promocionar els productes il’ambient d’una cafeteria de barri."
    },
    {
        nom: "Galeria digital d’il·lustracions",
        categoria: "contingut",
        descripcio: "Espai visual per mostrar una col·lecció d’il·lustracions creades durant el taller de contingut digital."
    },
    {
        nom: "Miniweb per a una protectora d’animals",
        categoria: "web",
        descripcio: "Web senzilla per presentar animals en adopció i facilitar el contacte amb la protectora."
    }
];

/* Recursos */
const recursos = [
    {
        text: "Guia bàsica d’HTML i CSS",
        href: "#"
    },
    {
        text: "Checklist per publicar una web",
        href: "#"
    },
    {
        text: "Banc d’icones lliures",
        href: "#"
    },
    {
        text: "Plantilla de portafoli",
        href: "#"
    }
];

/* Horari */
const horari = {
    icona: "◷",
    titol: "Horari",
    textPrincipal: "Dl–Dv: 16:00–20:00",
    textAuxiliar: "Atenció amb cita prèvia"
};

/* Footer */
const footer = {
    copyright: "© 2026 Aula Pixel",
    enllacosLegals: {
        avisLegal: "#",
        privacitat: "#"
    }
};


/* Tasques */
// Tasca 1
function crearElement(e, t) {
    const element = document.createElement(e);
    element.textContent = t;
    return element;
}

function crearEnllac(e, t, h) {
    const element = document.createElement(e);
    element.textContent = t;
    element.href = h;
    return element;
}

function crearLogo() {
    let logo = document.getElementById("logo");
    const h1 = crearElement("h1", dadesGenerals.nom);
    h1.className = "logo";
    logo.appendChild(h1);
}

crearLogo();

function crearNav() {
    let menuNav = document.getElementById("menu-nav");
    enllacosNav.forEach(e => {
        const a = crearEnllac("a", e.text, e.href);
        a.className = "nav-link";
        menuNav.appendChild(a);
    })
    menuNav.className = "menu-nav";
}

crearNav();

function crearHero() {
    let hero = document.getElementById("hero-text");

    const parts = heroData.titol.split(heroData.paraulaDestacada);
    
    const h2 = document.createElement("h2");

    const destacada = crearElement("span", heroData.paraulaDestacada);
    destacada.className = "highlight";

    h2.append(parts[0], destacada);

    hero.appendChild(h2);

}

crearHero();

function crearTargetaHero() {
    let targetaHero = document.getElementById("hero-targeta");

    const icona = document.createElement("span");
    icona.textContent = heroDestacada.icona;

    targetaHero.append(icona)
}

crearTargetaHero();