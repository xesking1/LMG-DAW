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
        categoria: "Web",
        durada: 12,
        icona: "▦",
        descripcio: "Aprèn a crear pàgines web senzilles amb estructura clara i estil visual coherent.",
        etiqueta: "NOU"
    },
    {
        nom: "Programació Creativa",
        categoria: "Programació",
        durada: 15,
        icona: "⌘",
        descripcio: "Utilitza JavaScript per crear petites experiències interactives al navegador."
    },
    {
        nom: "Contingut Digital",
        categoria: "Contingut",
        durada: 10,
        icona: "◎",
        descripcio: " Crea peces visuals i textos digitals per comunicar millor les teves idees.",
        etiqueta: "POPULAR"
    },
    {
        nom: "Portafoli Professional",
        categoria: "Web",
        durada: 8,
        icona: "◈",
        descripcio: "Organitza els teus projectes en una miniweb personal clara i atractiva."
    }
];

/* Projectes */
const projectes = [
    {
        nom: "Landing page per a una cafeteria local",
        categoria: "Web",
        descripcio: "Pàgina de presentació creada per promocionar els productes il’ambient d’una cafeteria de barri."
    },
    {
        nom: "Galeria digital d’il·lustracions",
        categoria: "Contingut",
        descripcio: "Espai visual per mostrar una col·lecció d’il·lustracions creades durant el taller de contingut digital."
    },
    {
        nom: "Miniweb per a una protectora d’animals",
        categoria: "Web",
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
    enllacosLegals: [
        {
            text: "Avís legal",
            href: "#"
        },
        {
            text: "Privacitat",
            href: "#"
        }
    ]
};


/* Tasques */
// Tasca 1
function crearElement(e, tC, cN) {
    const element = document.createElement(e);
    element.textContent = tC;
    element.className = cN;
    return element;
}

function crearEnllac(tC, h, cN) {
    const enllac = crearElement("a", tC, cN);
    enllac.href = h;
    return enllac;
}

function crearLogo() {
    let logo = document.getElementById("logo");
    const titol = crearElement("span", dadesGenerals.nom, "logo");
    logo.appendChild(titol);
}

function crearNav() {
    let menuNav = document.getElementById("menu-nav");
    enllacosNav.forEach(e => {
        const a = crearEnllac(e.text, e.href);
        a.className = "nav-link";
        menuNav.appendChild(a);
    });
    menuNav.className = "menu-nav";
}

function crearHero() {
    let hero = document.getElementById("hero-text");

    const parts = heroData.titol.split(heroData.paraulaDestacada);
    
    const h1 = document.createElement("h1");

    const destacada = crearElement("span", heroData.paraulaDestacada, "highlight");

    h1.append(parts[0], destacada);

    const descripcio = crearElement("p", heroData.descripcio, "descripcio");

    const accions = crearElement("div", "", "accions");
    const botoPrincipal = crearEnllac(heroData.botoPrincipal.text, heroData.botoPrincipal.href, "btn btn-primari");
    const botoSecundari = crearEnllac(heroData.botoSecundari.text, heroData.botoSecundari.href, "btn btn-secundari");
    
    accions.append(botoPrincipal, botoSecundari);

    hero.append(h1, descripcio, accions);
}

function crearTargetaHero() {
    let targetaHero = document.getElementById("hero-targeta");

    const icona = crearElement("span", heroDestacada.icona, "hero-icona")

    const titol = crearElement("h2", heroDestacada.titol, "hero-titol");

    const subtitol = crearElement("p", heroDestacada.subtítol, "hero-subtext");

    const textAuxiliar = crearElement("p", heroDestacada.textAuxiliar, "hero-subtext");

    targetaHero.append(icona, titol, subtitol, textAuxiliar);
}

function crearTargetesTallers() {
    let contenidorTallers = document.getElementById("llista-tallers");

    tallers.forEach(t => {
        const targetaTaller = crearElement("article", "", "targeta");

        const nom = crearElement("h3", t.nom);

        const categoria = crearElement("p", t.categoria);

        const durada = crearElement("p", "Durada: " + t.durada + " h");

        const icona = crearElement("span", t.icona, "taller-icona");

        const descripcio = crearElement("p", t.descripcio);

        targetaTaller.append(icona, nom, categoria, durada, descripcio);

        if(t.etiqueta) {
            const etiqueta = crearElement("span", t.etiqueta, "etiqueta");
            targetaTaller.appendChild(etiqueta);
        }

        targetaTaller.addEventListener("click", () => {
            const activaPrevia = document.querySelector(".targeta-activa");
            if (activaPrevia) {
                activaPrevia.classList.remove("targeta-activa")
            }

            targetaTaller.classList.add("targeta-activa");

            const notaProjectes = document.getElementById("nota-projectes");
            const titol = crearElement("h3", t.nom);
            const text = crearElement("p", t.descripcio);

            notaProjectes.replaceChildren(titol, text);
            
        });

        contenidorTallers.appendChild(targetaTaller);
    });
}

function crearProjectes() {
    let contenidorProjectes = document.getElementById("llista-projectes");

    projectes.forEach(p => {
        const projecte = crearElement("section", "", "projecte");

        const nom = crearElement("h3", p.nom);

        const categoria = crearElement("p", p.categoria);

        const descripcio = crearElement("p", p.descripcio);

        projecte.append(nom, categoria, descripcio);
        contenidorProjectes.appendChild(projecte);
    });
}

function crearRecursos() {
    let contenidorRecursos = document.getElementById("llista-recursos");

    recursos.forEach(r => {
        const recurs = crearEnllac(r.text, r.href);

        contenidorRecursos.appendChild(recurs);
    });
}

function crearHorari() {
    let contenidorHorari = document.getElementById("bloc-horari");

    const icona = crearElement("span", horari.icona);

    const titol = crearElement("h3", horari.titol);

    const textPrincipal = crearElement("p", horari.textPrincipal, "horari");

    const textAuxiliar = crearElement("p", horari.textAuxiliar);
    
    contenidorHorari.append(icona, titol, textPrincipal, textAuxiliar);
}

function crearFooter() {
    let contenidorFooter = document.querySelector(".footer");

    const copyright = crearElement("span", footer.copyright);

    const enllacosLegals = crearElement("span", "", "footer-links");
    footer.enllacosLegals.forEach(e => {
        const enllac = crearEnllac(e.text, e.href);

        enllacosLegals.appendChild(enllac);
    });
    
    contenidorFooter.append(copyright, enllacosLegals);
}

crearLogo();
crearNav();
crearHero();
crearTargetaHero();
crearTargetesTallers();
crearProjectes();
crearRecursos();
crearHorari();
crearFooter();
crearNotaProjectes();

// Tasca 2
function crearNotaProjectes() {
    let notaProjectes = document.getElementById("nota-projectes");

    const titol = crearElement("h3", "Informació dels tallers", "nota-etiqueta");
    const text = crearElement("p", "Selecciona un taller per veure’n més informació.")

    notaProjectes.append(titol, text);
}


// S'ha afegit el addEventListener dins la funció de creació de tallers (línia 230)


// Tasca 3
function crearControlsProjectes() {
    // No sé com es fa, hauria de quedar a l'esquerra
    let controlsProjectes = document.getElementById("controls-projectes");
    controlsProjectes.classList.add("camp-control");

    const contenidorControls = crearElement("span", "", "camp-control");
    const selectProjectes = document.createElement("select");
    selectProjectes.id = "selectProjectes";
    selectProjectes.name = "selectProjectes";
    
    const labelProjectes = crearLabel(selectProjectes.id, "Filtra els projectes per categoria");

    const opcions = [
        { text: "Tots els projectes", value: "Tots" },
        { text: "Web", value: "Web" },
        { text: "Contingut", value: "Contingut" }
    ];

    opcions.forEach(o => {
        const opcio = crearOpcio(o.value, o.text);
        
        if (o.value == "Tots") {
            opcio.defaultSelected = true;
        }

        selectProjectes.appendChild(opcio);
    });

    controlsProjectes.append(labelProjectes, selectProjectes);

    controlsProjectes.addEventListener("change", (e) => {
        filtrarProjectes(e.target.value);
    });
}
crearControlsProjectes();

function filtrarProjectes(categoria) {
    const projectes = document.querySelectorAll(".projecte");

    projectes.forEach(p => {
        const categoriaProjecte = p.querySelector("p").textContent;
        if (categoria === "Tots" || categoriaProjecte === categoria) {
            p.classList.remove("amagat");
        } else {
            p.classList.add("amagat");
        }
    });
}


// Tasca 4
function crearInput(t, i, n) {
    const input = document.createElement("input");
    input.type = t;
    input.id = i;
    input.name = n;
    return input;
}

function crearLabel(i, tC) {
    const label = document.createElement("label");
    label.htmlFor = i.id;
    label.textContent = tC;
    return label;
}

function crearOpcio(v, tC) {
    const option = document.createElement("option");
    option.value = v;
    option.textContent = tC;
    return option;
}

function crearFormulari() {
    let contenidorFormulari = document.getElementById("zona-formulari");

    const formulari = document.createElement("form");
    formulari.action = "#";
    formulari.method = "post";
    formulari.className = "formulari";

    const inputNom = crearInput("text", "nom", "nom", true);
    const labelNom = crearLabel(inputNom, "Nom");

    const selectTaller = document.createElement("select");
    selectTaller.id = "selectTaller";
    selectTaller.name = "taller";
    const labelTaller = crearLabel(selectTaller, "Taller");

    const primeraOpcio = crearOpcio("", "Selecciona un taller");
    primeraOpcio.hidden = true;
    primeraOpcio.defaultSelected = true;
    selectTaller.appendChild(primeraOpcio);

    tallers.forEach(t => {
        const opcio = crearOpcio(t.nom, t.nom);
        selectTaller.appendChild(opcio);
    });

    const enviar = document.createElement("button");
    enviar.type = "submit";
    enviar.textContent = "Enviar sol·licitud";
    enviar.className = "btn btn-primari";
    
    formulari.append(labelNom, inputNom, labelTaller, selectTaller, enviar);
    contenidorFormulari.appendChild(formulari);

    formulari.addEventListener("submit", (e) => {
        e.preventDefault();

        const valorNom = document.getElementById("nom").value.trim();
        const valorTaller = document.getElementById("selectTaller").value;

        const missatgeContacte = document.getElementById("missatge-contacte");
        missatgeContacte.replaceChildren();

        if (valorNom === "") {
            const errorNom = crearElement("p", "Error: Has d'escriure el teu nom.", "missatge-error");
            missatgeContacte.appendChild(errorNom);
        } else if (valorTaller === "") {
            const errorTaller = crearElement("p", "Error: Selecciona un taller de la llista.", "missatge-error");
            missatgeContacte.appendChild(errorTaller);
        } else {
            const exit = crearElement("p", `Gràcies ${valorNom}, t'has inscrit correctament al taller de ${valorTaller}.`, "missatge");
            missatgeContacte.appendChild(exit);
            
            formulari.reset();
        }
    });
}
crearFormulari();