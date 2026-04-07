/* =========================================================
   SOLUCIONARIO JS BÃSICO - PROYECTO NÃ‰BULA
   Ejercicios 1 al 29
   ========================================================= */

/*
Ejercicio 1.
Crear las variables y constantes necesarias para guardar:
- el nombre del estudio,
- el aÃ±o de copyright,
- los dÃ­as de entrega rÃ¡pida,
- la hora de apertura,
- la hora de cierre,
- y los tres servicios principales.
*/
const nombreEstudio = "Estudio NÃ©bula";
const anioCopyright = 2025;
const diasEntregaRapida = 7;
const horaApertura = "9:00";
const horaCierre = "14:00";
const servicio1 = "DiseÃ±o Web";
const servicio2 = "Growth Hacking";
const servicio3 = "Desarrollo";

/*
Ejercicio 2.
Partiendo de los datos anteriores, mostrar por consola:
- el nombre del estudio,
- el horario de atenciÃ³n,
- un mensaje sobre la entrega rÃ¡pida en 7 dÃ­as,
- y el nÃºmero total de servicios.
*/
console.log(`Nombre del estudio: ${nombreEstudio}`);
console.log(`Horario de atenciÃ³n: de ${horaApertura} a ${horaCierre}`);
console.log(`Existe una entrega rÃ¡pida en ${diasEntregaRapida} dÃ­as.`);
console.log("El estudio ofrece un total de 3 servicios.");

/*
Ejercicio 3.
Declarar cinco variables relacionadas con el estudio que incluyan:
- un string,
- un number,
- un boolean,
- un null,
- y un undefined.
Comprobar ademÃ¡s el tipo de cada una con typeof.
*/
const estudio = "Estudio NÃ©bula";
const precioBaseEj3 = 1200;
const incluyeSoporte = true;
const proyectoCancelado = null;
let presupuestoPendiente;

console.log(typeof estudio);
console.log(typeof precioBaseEj3);
console.log(typeof incluyeSoporte);
console.log(typeof proyectoCancelado); // object en JavaScript
console.log(proyectoCancelado); // null (su valor)
console.log(typeof presupuestoPendiente);

/*
Ejercicio 4.
Con los precios 1200, 850 y 1600:
- calcular la suma de DiseÃ±o Web y Desarrollo,
- calcular el precio medio,
- calcular el precio final de DiseÃ±o Web aplicando un descuento fijo de 150,
- y calcular el resto de dividir 3650 entre 3 pagos.
*/
const precioDisenioWeb = 1200;
const precioGrowthHacking = 850;
const precioDesarrollo = 1600;
const presupuestoTotal = 3650;

const sumaDisenioYDesarrollo = precioDisenioWeb + precioDesarrollo;
const precioMedio =
  (precioDisenioWeb + precioGrowthHacking + precioDesarrollo) / 3;
const precioFinalDisenio = precioDisenioWeb - 150;
const restoPagos = presupuestoTotal % 3;

console.log(`Suma de DiseÃ±o Web y Desarrollo: ${sumaDisenioYDesarrollo}`);
console.log(`Precio medio de los tres servicios: ${precioMedio}`);
console.log(`Precio final de DiseÃ±o Web con descuento: ${precioFinalDisenio}`);
console.log(`Resto al dividir 3650 entre 3 pagos: ${restoPagos}`);

/*
Ejercicio 5.
Comparar varios importes usando operadores relacionales y distinguir
entre igualdad no estricta (==) e igualdad estricta (===).
*/
const precioWeb = 1200;
const precioGrowth = 850;
const precioPackExpress = 300;
const presupuestoCliente = "1200";
const precioEsperado = 1200;

console.log(
  `Â¿DiseÃ±o Web y Growth Hacking cuestan lo mismo? ${precioWeb == precioGrowth}`
);
console.log(
  `Â¿DiseÃ±o Web es mÃ¡s caro que Growth Hacking? ${precioWeb > precioGrowth}`
);
console.log(`Â¿El pack express cuesta mÃ¡s de 250? ${precioPackExpress > 250}`);
console.log(
  `Â¿El presupuesto recibido coincide con el esperado (==)? ${
    presupuestoCliente == precioEsperado
  }`
);
console.log(
  `Â¿El presupuesto recibido coincide con el esperado (===)? ${
    presupuestoCliente === precioEsperado
  }`
);

/*
Ejercicio 6.
Con presupuesto 1600, entrega express true y necesidad SEO false,
indicar:
- si puede contratar DiseÃ±o Web,
- si puede contratar un pack combinado,
- o si necesita presupuesto personalizado,
usando operadores lÃ³gicos.
*/
const presupuestoDisponible = 1600;
const quiereEntregaExpress = true;
const necesitaSeo = false;

const puedeContratarDisenioWeb = presupuestoDisponible >= 1200;
const puedeContratarPackCombinado =
  presupuestoDisponible >= 1500 && !necesitaSeo;
const necesitaPresupuestoPersonalizado =
  quiereEntregaExpress || presupuestoDisponible < 1200;

console.log(`Â¿Puede contratar DiseÃ±o Web? ${puedeContratarDisenioWeb}`);
console.log(`Â¿Puede contratar el pack combinado? ${puedeContratarPackCombinado}`);
console.log(
  `Â¿Necesita pedir presupuesto personalizado? ${necesitaPresupuestoPersonalizado}`
);

/*
Ejercicio 7.
Con un presupuesto de 1500, recomendar:
- Growth Hacking,
- DiseÃ±o Web,
- o DiseÃ±o Web + Desarrollo,
segÃºn los tramos establecidos.
*/
const presupuestoClienta = 1500;

if (presupuestoClienta < 1000) {
  console.log("Se recomienda Growth Hacking.");
} else if (presupuestoClienta < 1800) {
  console.log("Se recomienda DiseÃ±o Web.");
} else {
  console.log("Se recomienda DiseÃ±o Web + Desarrollo.");
}

/*
Ejercicio 8.
Decidir con if...else si se puede ofrecer la entrega rÃ¡pida de 7 dÃ­as
a una clienta que necesita el proyecto en 5 dÃ­as.
*/
const diasEntregaEstudio = 7;
const diasDisponiblesClienta = 5;

if (diasEntregaEstudio <= diasDisponiblesClienta) {
  console.log("Se puede ofrecer la entrega rÃ¡pida.");
} else {
  console.log("No se puede ofrecer la entrega rÃ¡pida.");
}

/*
Ejercicio 9.
Con entrega rÃ¡pida en 7 dÃ­as y necesidad de 10 dÃ­as por parte de la clienta,
guardar el mensaje final en una variable usando operador ternario.
*/
const diasEntregaRapidaEstudio = 7;
const diasNecesariosClienta = 10;

const mensajeEntrega =
  diasEntregaRapidaEstudio <= diasNecesariosClienta
    ? "Entrega express disponible."
    : "Entrega express no disponible.";

console.log(mensajeEntrega);

/*
Ejercicio 10.
Crear un array con los tres recursos y recorrerlo con for
para mostrarlos por consola en forma de lista numerada.
*/
const recursos = [
  "Kit de UI Gratuito",
  "GuÃ­a de TipografÃ­a",
  "Checklist SEO 2025",
];

for (let i = 0; i < recursos.length; i++) {
  console.log(`${i + 1}. ${recursos[i]}`);
}

/*
Ejercicio 11.
Crear un array con los tres servicios y recorrerlo con forEach
mostrando "Servicio disponible: ...".
*/
const servicios = ["DiseÃ±o Web", "Growth Hacking", "Desarrollo"];

servicios.forEach(function (servicio) {
  console.log(`Servicio disponible: ${servicio}`);
});

/*
Ejercicio 12.
Usando un contador y un while, mostrar las revisiones 1, 2 y 3
y despuÃ©s un mensaje final indicando que se ha alcanzado el mÃ¡ximo.
*/
const maxRevisiones = 3;
let contadorRevision = 1;

while (contadorRevision <= maxRevisiones) {
  console.log(`RevisiÃ³n ${contadorRevision} realizada.`);
  contadorRevision++;
}

console.log("Se ha alcanzado el nÃºmero mÃ¡ximo de revisiones.");

/*
Ejercicio 13.
Crear un array con dos proyectos destacados, mostrarlos todos,
indicar cuÃ¡ntos hay y mostrar el primero.
*/
const proyectos = [
  "Redesign E-commerce Moda",
  "Dashboard Financiero SaaS",
];

for (let i = 0; i < proyectos.length; i++) {
  console.log(`Proyecto destacado: ${proyectos[i]}`);
}

console.log(`NÃºmero total de proyectos: ${proyectos.length}`);
console.log(`Primer proyecto: ${proyectos[0]}`);

/*
Ejercicio 14.
Crear una funciÃ³n que reciba el nombre de un cliente y devuelva:
"Bienvenida, [nombre], a Estudio NÃ©bula."
Probarla con LucÃ­a y Carlos.
*/
/**
 * Genera un mensaje de bienvenida personalizado para un cliente.
 *
 * @param {string} nombre - Nombre de la persona a la que se da la bienvenida.
 * @returns {string} Mensaje de bienvenida con el nombre recibido.
 *
 * @example
 * saludarCliente("LucÃ­a");
 * // "Bienvenida, LucÃ­a, a Estudio NÃ©bula."
 */
function saludarCliente(nombre) {
  return `Bienvenida, ${nombre}, a Estudio NÃ©bula.`;
}

console.log(saludarCliente("LucÃ­a"));
console.log(saludarCliente("Carlos"));

/*
Ejercicio 15.
Crear una funciÃ³n con dos parÃ¡metros, precio base y descuento fijo,
y devolver el precio final.
Probarla con:
- 1200 y 150
- 850 y 100
*/
/**
 * Calcula el precio final de un servicio aplicando un descuento fijo.
 *
 * @param {number} precioBase - Precio inicial del servicio antes del descuento.
 * @param {number} descuento - Cantidad que se resta al precio base.
 * @returns {number} Precio final tras aplicar el descuento.
 *
 * @example
 * calcularPresupuesto(1200, 150);
 * // 1050
 */
function calcularPresupuesto(precioBase, descuento) {
  return precioBase - descuento;
}

console.log(`Precio final: ${calcularPresupuesto(1200, 150)}`);
console.log(`Precio final: ${calcularPresupuesto(850, 100)}`);

/*
Ejercicio 16.
Crear una funciÃ³n que reciba hora de apertura y cierre y devuelva:
"Horario de atenciÃ³n: de [apertura] a [cierre]."
Probarla con dos horarios distintos.
*/
/**
 * Genera un texto con el horario de atenciÃ³n del estudio.
 *
 * @param {string} apertura - Hora de apertura del estudio.
 * @param {string} cierre - Hora de cierre del estudio.
 * @returns {string} Frase con el horario formateado.
 *
 * @example
 * mostrarHorario("9:00", "14:00");
 * // "Horario de atenciÃ³n: de 9:00 a 14:00."
 */
function mostrarHorario(apertura, cierre) {
  return `Horario de atenciÃ³n: de ${apertura} a ${cierre}.`;
}

console.log(mostrarHorario("9:00", "14:00"));
console.log(mostrarHorario("10:00", "18:00"));

/*
Ejercicio 17.
Crear una funciÃ³n que reciba un presupuesto y devuelva
la recomendaciÃ³n adecuada segÃºn los tramos.
Probarla con 900, 1500 y 2200.
*/
/**
 * Devuelve una recomendaciÃ³n de servicio en funciÃ³n del presupuesto disponible.
 *
 * @param {number} presupuesto - Cantidad que la clienta puede invertir.
 * @returns {string} RecomendaciÃ³n del servicio mÃ¡s adecuado segÃºn el presupuesto.
 *
 * @example
 * recomendarServicio(900);
 * // "Se recomienda Growth Hacking."
 *
 * @example
 * recomendarServicio(1500);
 * // "Se recomienda DiseÃ±o Web."
 */
function recomendarServicio(presupuesto) {
  if (presupuesto < 1000) {
    return "Se recomienda Growth Hacking.";
  } else if (presupuesto < 1800) {
    return "Se recomienda DiseÃ±o Web.";
  } else {
    return "Se recomienda DiseÃ±o Web + Desarrollo.";
  }
}

console.log(recomendarServicio(900));
console.log(recomendarServicio(1500));
console.log(recomendarServicio(2200));

/*
Ejercicio 18.
Crear una funciÃ³n que reciba un texto y devuelva cuÃ¡ntas palabras contiene.
Probarla con varios textos.
*/
/**
 * Cuenta cuÃ¡ntas palabras contiene un texto.
 *
 * @param {string} texto - Texto que se quiere analizar.
 * @returns {number} NÃºmero de palabras detectadas en el texto.
 *
 * @example
 * contarPalabras("Transformamos ideas digitales");
 * // 3
 */
function contarPalabras(texto) {
  return texto.split(" ").length;
}

console.log(
  `NÃºmero de palabras: ${contarPalabras("Transformamos ideas digitales")}`
);
console.log(`NÃºmero de palabras: ${contarPalabras("Entrega en 7 dÃ­as")}`);
console.log(
  `NÃºmero de palabras: ${contarPalabras(
    "DiseÃ±amos y desarrollamos soluciones web a medida"
  )}`
);

/*
Ejercicio 19.
Modificar la funciÃ³n del ejercicio 15 para que,
si no se indica descuento, use 50 por defecto.
*/
/**
 * Calcula el precio final de un servicio aplicando un descuento.
 * Si no se indica descuento, se aplica uno de 50 por defecto.
 *
 * @param {number} precioBase - Precio inicial del servicio.
 * @param {number} [descuento=50] - Descuento aplicado al precio base.
 * @returns {number} Precio final tras aplicar el descuento.
 *
 * @example
 * calcularPresupuestoConDefecto(1200, 150);
 * // 1050
 *
 * @example
 * calcularPresupuestoConDefecto(850);
 * // 800
 */
function calcularPresupuestoConDefecto(precioBase, descuento = 50) {
  return precioBase - descuento;
}

console.log(`Precio final: ${calcularPresupuestoConDefecto(1200, 150)}`);
console.log(`Precio final: ${calcularPresupuestoConDefecto(850)}`);

/*
Ejercicio 20.
Reescribir la funciÃ³n de saludo del ejercicio 14
en tres versiones:
- declarada,
- expresiÃ³n,
- y flecha.
Probarlas con el nombre Marta.
*/
/**
 * Genera un mensaje de bienvenida personalizado.
 *
 * @param {string} nombre - Nombre de la persona a la que se saluda.
 * @returns {string} Mensaje de bienvenida.
 *
 * @example
 * saludoDeclarado("Marta");
 * // "Bienvenida, Marta, a Estudio NÃ©bula."
 */
function saludoDeclarado(nombre) {
  return `Bienvenida, ${nombre}, a Estudio NÃ©bula.`;
}

/**
 * Genera un mensaje de bienvenida personalizado mediante una funciÃ³n expresiÃ³n.
 *
 * @type {(nombre: string) => string}
 */
const saludoExpresion = function (nombre) {
  return `Bienvenida, ${nombre}, a Estudio NÃ©bula.`;
};

/**
 * Genera un mensaje de bienvenida personalizado mediante una funciÃ³n flecha.
 *
 * @type {(nombre: string) => string}
 */
const saludoFlecha = (nombre) => {
  return `Bienvenida, ${nombre}, a Estudio NÃ©bula.`;
};

console.log(saludoDeclarado("Marta"));
console.log(saludoExpresion("Marta"));
console.log(saludoFlecha("Marta"));

/*
Ejercicio 21.
Crear una funciÃ³n calcularPrecioFinal(precioBase, descuento),
llamarla con 1200 y 150, y con 850 y 100,
aÃ±adiendo comentarios que distingan parÃ¡metros y argumentos.
*/
/**
 * Calcula el precio final restando un descuento al precio base.
 *
 * @param {number} precioBase - Precio inicial antes de aplicar el descuento.
 * @param {number} descuento - Descuento que se resta al precio base.
 * @returns {number} Precio final calculado.
 *
 * @example
 * calcularPrecioFinal(1200, 150);
 * // 1050
 */
function calcularPrecioFinal(precioBase, descuento) {
  return precioBase - descuento;
}

// Argumentos: 1200 y 150
console.log(`Precio final: ${calcularPrecioFinal(1200, 150)}`);

// Argumentos: 850 y 100
console.log(`Precio final: ${calcularPrecioFinal(850, 100)}`);

/*
Ejercicio 22.
Crear una variable global nombreEstudio,
una funciÃ³n mostrarCampana con una variable local mensajeCampana
y mostrar los mensajes correspondientes.
*/
const nombreEstudioGlobal = "Estudio NÃ©bula";

/**
 * Muestra por consola un mensaje publicitario utilizando una variable global
 * y una variable local definida dentro de la funciÃ³n.
 *
 * @returns {void} No devuelve ningÃºn valor; solo muestra informaciÃ³n por consola.
 *
 * @example
 * mostrarCampana();
 * // "Estudio NÃ©bula - Entrega rÃ¡pida disponible"
 */
function mostrarCampana() {
  const mensajeCampana = "Entrega rÃ¡pida disponible";
  console.log(`${nombreEstudioGlobal} - ${mensajeCampana}`);
}

console.log(`Nombre del estudio: ${nombreEstudioGlobal}`);
mostrarCampana();

/*
Ejercicio 23.
Crear una funciÃ³n sumarServicios(...importes)
que sume 1200, 850 y 1600 usando parÃ¡metro rest.
*/
/**
 * Suma cualquier cantidad de importes recibidos como argumentos.
 *
 * @param {...number} importes - Lista de importes numÃ©ricos que se desean sumar.
 * @returns {number} Suma total de todos los importes recibidos.
 *
 * @example
 * sumarServicios(1200, 850, 1600);
 * // 3650
 */
function sumarServicios(...importes) {
  let total = 0;

  for (let i = 0; i < importes.length; i++) {
    total += importes[i];
  }

  return total;
}

console.log(`Total contratado: ${sumarServicios(1200, 850, 1600)}`);

/*
Ejercicio 24.
Crear un objeto literal servicioWeb con:
- nombre,
- precio,
- duraciÃ³n,
- e inclusiÃ³n de soporte.
Mostrar sus propiedades.
*/

const servicioWeb = {
  nombre: "DiseÃ±o Web",
  precio: 1200,
  duracionSemanas: 4,
  incluyeSoporte: true,
};

console.log(`Nombre: ${servicioWeb.nombre}`);
console.log(`Precio: ${servicioWeb.precio}`);
console.log(`DuraciÃ³n: ${servicioWeb.duracionSemanas}`);
console.log(`Incluye soporte: ${servicioWeb.incluyeSoporte}`);

/*
Ejercicio 25.
Crear un objeto cliente usando new Object()
y aÃ±adir:
- nombre,
- email,
- presupuesto,
- quiereExpress.
*/
const cliente = new Object();

cliente.nombre = "LucÃ­a";
cliente.email = "lucia@nebula.com";
cliente.presupuesto = 1500;
cliente.quiereExpress = true;

console.log(`Nombre: ${cliente.nombre}`);
console.log(`Email: ${cliente.email}`);
console.log(`Presupuesto: ${cliente.presupuesto}`);
console.log(`Quiere express: ${cliente.quiereExpress}`);

/*
Ejercicio 26.
Partiendo de un objeto proyecto:
- aÃ±adir plazoDias,
- modificar tipo,
- eliminar destacado,
y mostrar el objeto final.
*/
const proyecto = {
  nombre: "Redesign E-commerce Moda",
  tipo: "Tienda online",
  destacado: true,
};

proyecto.plazoDias = 7;
proyecto.tipo = "E-commerce premium";
delete proyecto.destacado;

console.log(proyecto);

/*
Ejercicio 27.
Crear un objeto con:
- nombre,
- cliente,
- duraciÃ³n,
y un mÃ©todo mostrarResumen() que devuelva un texto resumen.
*/
const proyectoResumen = {
  nombre: "Dashboard Financiero SaaS",
  cliente: "FinanData",
  duracionSemanas: 6,
  mostrarResumen: function () {
    return `Proyecto ${this.nombre} para ${this.cliente}. DuraciÃ³n: ${this.duracionSemanas} semanas.`;
  },
};

console.log(proyectoResumen.mostrarResumen());

/*
Ejercicio 28.
Crear un objeto servicio y recorrer sus propiedades con for...in,
mostrando "clave: valor".
*/
const servicio = {
  nombre: "Growth Hacking",
  precio: 850,
  incluyeSeo: true,
};

for (let clave in servicio) {
  console.log(`${clave}: ${servicio[clave]}`);
}

/*
Ejercicio 29.
El estudio quiere poder obtener un resumen en texto de cada servicio creado mediante un constructor.

Crea un constructor llamado Servicio que permita generar objetos con estas propiedades:
- nombre
- precio
- incluyeSeo

DespuÃ©s, realiza las siguientes acciones:
1. modifica el mÃ©todo toString() del prototipo de Servicio para que devuelva un texto con este formato:
   Nombre del proyecto: [valor]
   Precio de proyecto: [valor]â‚¬
   Â¿Incluye SEO?: [valor]
2. crea un objeto a partir del constructor con estos valores:
   - nombre: Growth Hacking
   - precio: 850
   - incluyeSeo: true
3. muestra por consola el resultado de llamar al mÃ©todo toString() sobre ese objeto.
*/

function Servicio(nombre, precio, incluyeSeo) {
  this.nombre = nombre;
  this.precio = precio;
  this.incluyeSeo = incluyeSeo;
}

Servicio.prototype.toString = function () {
  return `Nombre del proyecto: ${this.nombre}
Precio de proyecto: ${this.precio}â‚¬
Â¿Incluye SEO?: ${this.incluyeSeo}`;
};

const servicioToString = new Servicio("Growth Hacking", 850, true);

console.log(servicioToString.toString());



/*
Ejercicio 30.
El estudio quiere que cada servicio creado mediante un constructor pueda mostrar su propia
informaciÃ³n al ejecutarse un mÃ©todo.

Crea un constructor llamado Servicio que permita generar objetos con estas propiedades:
- nombre
- precio
- incluyeSeo

DespuÃ©s, realiza las siguientes acciones:
1. crea en el prototipo de Servicio un mÃ©todo llamado mostrarValores
2. ese mÃ©todo debe devolver la informaciÃ³n del objeto con este formato:
   Nombre del proyecto: [valor]
   Precio de proyecto: [valor]â‚¬
   Â¿Incluye SEO?: [valor]
3. crea un objeto a partir del constructor con estos valores:
   - nombre: Growth Hacking
   - precio: 850
   - incluyeSeo: true
4. llama al mÃ©todo mostrarValores() y comprueba su funcionamiento.
*/

function Servicio(nombre, precio, incluyeSeo) {
  this.nombre = nombre;
  this.precio = precio;
  this.incluyeSeo = incluyeSeo;

  this.mostrarValores = function () {
    return `Nombre del proyecto: ${this.nombre}
      Precio de proyecto: ${this.precio}â‚¬
      Â¿Incluye SEO?: ${this.incluyeSeo}`;
  };
}

const servicioMetodo = new Servicio("Growth Hacking", 850, true);

console.log(servicioMetodo.mostrarValores());

/*
Ejercicio 31.
Crear un objeto cliente y obtener:
- sus claves con Object.keys(),
- sus valores con Object.values(),
- y sus entradas con Object.entries().
*/
const clienta = {
  nombre: "Marta",
  email: "marta@correo.com",
  premium: true,
};

const claves = Object.keys(clienta);
const valores = Object.values(clienta);
const entradas = Object.entries(clienta);

console.log(`Claves: ${claves.join(", ")}`);
console.log(`Valores: ${valores.join(", ")}`);
console.log(
  `Entradas: ${entradas.map((entrada) => entrada.join(": ")).join(" | ")}`
);