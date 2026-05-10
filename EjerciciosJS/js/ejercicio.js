/* Bloque 1. Fundamentos, variables y tipos */

/*
Ejercicio 1. Datos básicos del estudio
Objetivo: Practicar la declaración de variables y constantes utilizando nombres adecuados y valores de distintos tipos básicos.
Tiempo estimado: 10 minutos.

Enunciado:
Crea las variables y constantes necesarias para almacenar los siguientes datos del estudio:
    nombre del estudio,
    año del copyright,
    número de días de entrega rápida,
    hora de apertura,
    hora de cierre,
    nombre de los tres servicios.

Requisitos:
    Se ha de utilizar const cuando el valor no vaya a cambiar.
    Se ha de utilizar nombres de variables claros y relacionados con el contenido.
    No se ha de mostrar todavía nada por consola.
    Añadir al menos un comentario al inicio del ejercicio indicando qué estás haciendo.
*/

// Declaración de constantes
const nombreEstudio = "Estudio Nebula";
const añoCopy = 2004;
const diasEntregaRapida = 7;
const horaApertura = "12:00";
const horaCierre = "22:00";
const servicios = ["Diseño Web", "Growth Hacking", "Desarrollo"];

/*
Ejercicio 2. Mensajes de presentación
Objetivo: Utilizar variables ya declaradas para construir mensajes y mostrarlos por consola.
Tiempo estimado: 10 minutos.

Enunciado:
    Partiendo de los datos del ejercicio anterior, muestra por consola los siguientes mensajes:
    El nombre del estudio.
    El horario de atención.
    Un mensaje indicando que existe una entrega rápida en 7 días.
    El número total de servicios que ofrece el estudio.

Requisitos:
    Se ha de mostrar un mínimo de 4 mensajes por consola.
    Al menos 2 mensajes deben construirse usando concatenación o interpolación con variables.
    El mensaje del horario debe incluir hora de apertura y de cierre.
    Se han de redactar frases completas con sentido para mostrar los mensajes
*/

console.log("#2");
console.log(`Nombre del estudio: ${nombreEstudio}`);
console.log(`Horario de atención: ${horaApertura}-${horaCierre}`);
console.log(`Existe una entrega rápida para dentro de ${diasEntregaRapida} días`);
console.log(`La empresa ofrece ${servicios.length} servicios`);


/*
Ejercicio 3. Clasificación de datos
Objetivo: Identificar correctamente tipos de datos primitivos en JavaScript.
Tiempo estimado: 8 minutos.

Enunciado:
    Declara cinco variables relacionadas con el contexto del estudio y añade al lado un comentario indicando qué tipo de dato tiene cada una.
    Debes incluir obligatoriamente:
    un string,
    un number,
    un boolean,
    un null,
    un undefined.
Comprueba a continuación el tipo de dato asignado y muéstralo por consola. Para ello puedes utilizar typeof.

Requisitos:
    Todas las variables deben estar relacionadas con el estudio digital.
    El tipo debe indicarse en un comentario al lado o justo encima de cada variable.
    No es necesario mostrar nada por consola.
    Se deben respetar la diferencia entre null y undefined.
*/

let jefeEquipo = "Manu"; // string
let integrantesEquipo = 8; // number
let proyectoActivo = true; // boolean
let proximoProyecto = null; // null
let encargadoCafes = undefined; // undefined

console.log("#3");
console.log(typeof (integrantesEquipo));
console.log(typeof (integrantesEquipo));
console.log(typeof (proyectoActivo));
console.log(typeof (encargadoCafes));
console.log(typeof (proximoProyecto));


/* Bloque 2. Operadores */

/*
Ejercicio 4. Presupuesto simple
Objetivo: Aplicar operadores aritméticos sobre valores numéricos.
Tiempo estimado: 12 minutos.

Enunciado:
    Una clienta solicita información sobre tres servicios del estudio. Los precios son los siguientes:
    Diseño Web: 1200 €
    Growth Hacking: 850 €
    Desarrollo: 1600 €
    A partir de estos datos, crea las variables necesarias y calcula:
    la suma del precio de Diseño Web y Desarrollo,
    el precio medio de los tres servicios,
    el precio final de Diseño Web aplicando un descuento fijo de 150 €,
    el resto de dividir un presupuesto total de 3650 € entre 3 pagos iguales.

Requisitos:
    Se deben guardar los precios en variables.
    Se debe crear una variable nueva para cada resultado.
    Se debe usar al menos los operadores +, /, - y %.
    Se debe mostrar por consola los cuatro resultados con un texto que indique qué representa cada uno.
*/

const precioDiseñoWeb = 1200;
const precioGrowthHacking = 850;
const precioDesarrollo = 1600;

let precioWebDesarrollo = precioDiseñoWeb + precioDesarrollo;
let precioMedio = (precioDiseñoWeb + precioGrowthHacking + precioDesarrollo) / 3;
let precioWebDescontado = precioDiseñoWeb - 150;
let precioTotal3Pagos = (precioDiseñoWeb + precioGrowthHacking + precioDesarrollo) % 3;

console.log("#4");
console.log(`El precio de Diseño Web y Desarrollo es: ${precioWebDesarrollo}€`);
console.log(`El precio medio de los servicios es: ${precioMedio}`);
console.log(`Precio de Diseño Web con descuento (150€): ${precioWebDescontado}€`);
console.log(`El resto del presupuesto total entre 3 pagos es: ${precioTotal3Pagos}€`);


/*
Ejercicio 5. Comparación de servicios
Objetivo: Comparar valores numéricos utilizando operadores relacionales y distinguir entre igualdad estricta y no estricta.
Tiempo estimado: 10 minutos.

Enunciado:
    El estudio trabaja con los siguientes importes:
    Precio de Diseño Web: 1200
    Precio de Growth Hacking: 850
    Precio del pack express: 300
    Presupuesto recibido de una clienta: "1200"
    Precio esperado para comparar: 1200
    A partir de estos datos, crea las variables necesarias y muestra por consola el resultado de las siguientes comprobaciones:
    si el precio de Diseño Web y el de Growth Hacking son iguales,
    si el precio de Diseño Web es mayor que el de Growth Hacking,
    si el precio del pack express es mayor que 250,
    si el presupuesto recibido de la clienta coincide con el precio esperado usando:
    comparación no estricta,
    comparación estricta.

Requisitos:
    Se deben guardar todos los datos en variables.
    Se deben usar operadores de comparación.
    Se debe incluir al menos una comparación con ==.
    Se debe incluir al menos una comparación con ===.
    Se debe mostrar por consola cada comprobación con un texto que indique claramente qué se está evaluando.
    No se deben modificar los valores proporcionados.
*/

const packExpress = 300;
let presupuestoClienta = "1200";
let precioEsperado = 1200;

let preciosIguales = precioDiseñoWeb == precioGrowthHacking;
let precioMayor = precioDiseñoWeb > precioGrowthHacking;
let precioExpressMayor = packExpress > 250;
let precioEsperadoIgual = presupuestoClienta == precioEsperado;
let precioEsperadoMuyIgual = presupuestoClienta === precioEsperado;

console.log("#5");
console.log(`El precio de Diseño Web y Growth Hacking son iguales: ${preciosIguales}`);
console.log(`El precio de Diseño Web es mayor al de Growth Hacking: ${precioMayor}`);
console.log(`El precio del Pack Express es mayor a 250€: ${precioExpressMayor}`);
console.log(`El presupuesto recibido de la clienta coincide con el esperado: ${precioEsperadoIgual}`);
console.log(`El presupuesto recibido coincide estrictamente con el esperado: ${precioEsperadoMuyIgual}`);


/*
Ejercicio 6. Condiciones de contratación
Objetivo: Resolver situaciones sencillas utilizando operadores lógicos.
Tiempo estimado: 12 minutos.

Enunciado:
    Una clienta contacta con el estudio con los siguientes datos:
    Presupuesto disponible: 1600
    Quiere entrega express: true
    Necesita servicio SEO: false
    Además, el estudio trabaja con estas condiciones:
    Un cliente puede contratar Diseño Web si su presupuesto es igual o superior a 1200.
    Un cliente puede contratar un pack combinado si su presupuesto es igual o superior a 1500 y no necesita SEO.
    Un cliente debe pedir presupuesto personalizado si quiere entrega express o si su presupuesto es inferior a 1200.
    A partir de estos datos, crea las variables necesarias y muestra por consola si la clienta:
    puede contratar el servicio de Diseño Web,
    puede contratar el pack combinado,
    necesita pedir un presupuesto personalizado.

Requisitos:
    Se deben guardar todos los datos en variables.
    Se deben usar los operadores lógicos &&, || y ! al menos una vez a lo largo del ejercicio.
    Se debe mostrar por consola el resultado de las tres comprobaciones con un texto que indique claramente qué se está evaluando.
    No se debe usar if en este ejercicio.
    No se deben modificar los valores proporcionados.
    Salida esperada:
    ¿Puede contratar Diseño Web? true
    ¿Puede contratar el pack combinado? true
    ¿Necesita pedir presupuesto personalizado? true
*/

presupuestoClienta = 1600;
let quiereEntregaExpress = true;
let necesitaSEO = false;

let puedeContratarWeb = presupuestoClienta > 1200;
let puedeContratarPackCombinado = presupuestoClienta > 1500 && !necesitaSEO;
let necesitaPresupuestoPersonalizado = quiereEntregaExpress || presupuestoClienta < 1200;

console.log("#6")
console.log(`Puede contratar el Diseño Web: ${puedeContratarWeb}`);
console.log(`Puede contratar el pack combinado: ${puedeContratarPackCombinado}`);
console.log(`Necesita pedir un presupuesto personalizado: ${necesitaPresupuestoPersonalizado}`);


/* Bloque 3. Condicionales */

/*
Ejercicio 7. Recomendador de servicio
Objetivo: Tomar decisiones con if, else if y else en función de un valor numérico.
Tiempo estimado: 12 minutos.

Enunciado:
    El estudio clasifica las recomendaciones de servicio según el presupuesto de la clienta de esta manera:
    Si el presupuesto es menor que 1000, se recomienda Growth Hacking.
    Si el presupuesto es igual o mayor que 1000 y menor que 1800, se recomienda Diseño Web.
    Si el presupuesto es igual o mayor que 1800, se recomienda la combinación de Diseño Web + Desarrollo.
    Una clienta contacta con el estudio con un presupuesto de 1500.
    A partir de estos datos, crea las variables necesarias y muestra por consola qué servicio se le recomienda.

Requisitos:
    Se debe guardar en una variable el presupuesto de la clienta.
    Se debe usar una estructura if...else if...else.
    Se debe comparar el presupuesto con los tramos indicados en el enunciado.
    Se debe mostrar por consola solo uno de los siguientes mensajes:
    Se recomienda Growth Hacking.
    Se recomienda Diseño Web.
    Se recomienda Diseño Web + Desarrollo.
    No se deben modificar los valores proporcionados.
*/

presupuestoClienta = 1500;
let recomendacion;

if (presupuestoClienta < 1000) {
    recomendacion = servicios[1];
} else if (presupuestoClienta >= 1000 && presupuestoClienta < 1800) {
    recomendacion = servicios[0];
} else {
    recomendacion = `${servicios[0]} + ${servicios[2]}`;
}

console.log("#7")
console.log(`Se recomienda ${recomendacion}`);


/*
Ejercicio 8. Entrega rápida
Objetivo: Aplicar una estructura condicional simple para decidir entre dos resultados posibles.
Tiempo estimado: 8 minutos.

Enunciado:
    El estudio ofrece un servicio de entrega rápida en 7 días.
    Una clienta necesita tener su proyecto terminado en 5 días.
    A partir de estos datos, crea las variables necesarias y muestra por consola si el estudio puede o no ofrecerle la entrega rápida.

Requisitos:
    Se deben guardar en variables:
    los días de entrega rápida del estudio,
    los días disponibles de la clienta.
    Se debe usar una estructura condicional if...else.
    Se deben comparar los dos valores para decidir el resultado.
    Se debe mostrar por consola solo uno de estos dos mensajes:
    Se puede ofrecer la entrega rápida.
    No se puede ofrecer la entrega rápida.
    No se deben modificar los valores proporcionados.
*/

let entregaRapida = diasEntregaRapida;
let diasDisponiblesClienta = 5;

if (diasDisponiblesClienta >= entregaRapida) {
    console.log("Se puede ofrecer la entrega rápida.");
} else {
    console.log("No se puede ofrecer la entrega rápida.");
}


/*
Ejercicio 9. Ampliación opcional: mensaje corto con ternario
Objetivo: Utilizar el operador ternario para resolver una decisión sencilla a partir de dos valores dados.
Tiempo estimado: 6 minutos.

Enunciado:
    El estudio ofrece un servicio de entrega rápida en 7 días.
    Una clienta necesita tener su proyecto terminado en 10 días.
    A partir de estos datos, crea las variables necesarias y utiliza un operador ternario para guardar en una variable el mensaje final que corresponda.
    Debes mostrar por consola el resultado.

Requisitos:
    Se debe guardar en variables:
    los días de entrega rápida del estudio,
    los días disponibles de la clienta.
    Se debe usar un operador ternario.
    Se debe guardar el resultado del ternario en una variable.
    Se debe mostrar por consola solo uno de estos dos mensajes:
    Entrega express disponible.
    Entrega express no disponible.
    No se debe usar if...else.
    No se deben modificar los valores proporcionados.
*/

entregaRapida = diasEntregaRapida;
diasDisponiblesClienta = 10;

console.log("#9");
console.log(diasDisponiblesClienta >= entregaRapida ? "Entrega express disponible." : "Entrega express no disponible.");


/* Bloque 4. Bucles y arrays */

/*
Ejercicio 10. Listado de recursos
Objetivo: Crear un array y recorrerlo con un bucle for para mostrar todos sus elementos en orden.
Tiempo estimado: 10 minutos.

Enunciado:
    El estudio pone a disposición de sus clientes los siguientes recursos:
    Kit de UI Gratuito
    Guía de Tipografía
    Checklist SEO 2025
    A partir de estos datos, crea un array con los tres recursos y recórrelo con un bucle for para mostrarlos por consola en forma de lista numerada.

Requisitos:
    Se deben guardar los tres recursos en un único array.
    Se debe usar un bucle for.
    Se deben mostrar por consola los tres recursos en el mismo orden en que aparecen en el enunciado.
    Cada recurso debe aparecer numerado.
    No se puede escribir tres console.log independientes.
    No se deben modificar los valores proporcionados.

Salida esperada:
    1. Kit de UI Gratuito
    2. Guía de Tipografía
    3. Checklist SEO 2025
*/

let recursos = ["Kit de UI Gratuito", "Guía de Tipografía", "Checklist SEO 2025"];

console.log("#10");
for (let i = 0; i < recursos.length; i++) {
    console.log(`${i+1}. ${recursos[i]}`)
}


/*
Ejercicio 11. Recorrer servicios
Objetivo: Recorrer un array utilizando forEach para mostrar un mensaje por cada elemento.
Tiempo estimado: 10 minutos.

Enunciado:
    El estudio ofrece los siguientes servicios:
    Diseño Web
    Growth Hacking
    Desarrollo
    A partir de estos datos, crea un array con los tres servicios y recórrelo utilizando forEach.
    Por cada servicio, debes mostrar por consola un mensaje con este formato:
    Servicio disponible: [nombre del servicio]

Requisitos:
    Se deben guardar los tres servicios en un único array.
    Se debe recorrer el array usando forEach.
    Se debe mostrar un mensaje por cada servicio.
    Se debe respetar el mismo orden en que aparecen en el enunciado.
    No se puede usar un bucle for.
    No se deben modificar los valores proporcionados.

Salida esperada:
    Servicio disponible: Diseño Web
    Servicio disponible: Growth Hacking
    Servicio disponible: Desarrollo
*/

console.log("#11");
servicios.forEach((servicio) => {
    console.log(`Servicio disponible: ${servicio}`);
})


/*
Ejercicio 12. Contar revisiones
Objetivo: Utilizar un bucle while para repetir una acción un número limitado de veces mediante un contador.
Tiempo estimado: 12 minutos.

Enunciado:
    El estudio permite realizar un máximo de 3 revisiones sobre un proyecto.
    A partir de este dato, crea las variables necesarias y utiliza un bucle while para mostrar por consola cada una de las revisiones realizadas, desde la primera hasta la tercera.
    Cuando se hayan mostrado todas las revisiones, debes mostrar un último mensaje indicando que se ha alcanzado el máximo permitido.

Requisitos:
    Se debe usar una variable contador.
    Se debe usar un bucle while.
    Se deben mostrar por consola las tres revisiones en orden.
    Después del bucle, se debe mostrar un mensaje final indicando que ya no se pueden hacer más revisiones.
    No se debe usar for ni do...while.
    No se debe modificar el valor máximo de revisiones dado en el enunciado.

Salida esperada:
    Revisión 1 realizada.
    Revisión 2 realizada.
    Revisión 3 realizada.
    Se ha alcanzado el número máximo de revisiones.
*/

let revisionesMaximas = 3;
let contador = 0;

console.log("#12");
while (contador < revisionesMaximas) {
    contador++;
    console.log(`Revisión 1 ${contador} realizada.`);
}
console.log("Se ha alcanzado el número máximo de revisiones.");


/*
Ejercicio 13. Buscar proyectos destacados
Objetivo: Utilizar un array para almacenar varios elementos, recorrerlo y acceder a una posición concreta.
Tiempo estimado: 10 minutos.

Enunciado:
    El estudio tiene estos dos proyectos destacados:
    Redesign E-commerce Moda
    Dashboard Financiero SaaS
    A partir de estos datos, crea un array con los dos proyectos y realiza las siguientes acciones:
    muestra por consola todos los proyectos del array,
    muestra por consola cuántos proyectos hay en total,
    muestra por consola cuál es el proyecto que aparece en primera posición.

Requisitos:
    Debes guardar los dos proyectos en un único array.
    Debes recorrer el array al menos una vez para mostrar todos sus elementos.
    Debes mostrar por consola el número total de proyectos usando el propio array.
    Debes acceder directamente al primer elemento del array para mostrar qué proyecto aparece en primera posición.
    Debes respetar el orden en que aparecen en el enunciado.
    No debes modificar los valores proporcionados.

Salida esperada:
    Proyecto destacado: Redesign E-commerce Moda
    Proyecto destacado: Dashboard Financiero SaaS
    Número total de proyectos: 2
    Primer proyecto: Redesign E-commerce Moda
*/

let proyectosDestacados = ["Redesign E-commerce Moda", "Dashboard Financiero SaaS"];

console.log("#13");
for(let p of proyectosDestacados) {
    console.log(`Proyecto destacado: ${p}`)
}
console.log(`Número total de proyectos: ${proyectosDestacados.length}`);
console.log(`Primer proyecto: ${proyectosDestacados[0]}`);


/* Bloque 5. Funciones */

/*
Ejercicio 14. Función de saludo del estudio
Objetivo: Declarar una función con parámetro y retorno para generar un mensaje personalizado.
Tiempo estimado: 10 minutos.

Enunciado:
    El estudio quiere mostrar un mensaje de bienvenida personalizado a cada cliente.
    Crea una función que reciba como parámetro el nombre de un cliente y devuelva un mensaje con este formato:
    Bienvenida, [nombre], a Estudio Nébula.
    Después, llama a la función dos veces utilizando estos nombres:
    Lucía
    Carlos
    Muestra por consola el resultado de ambas llamadas.

Requisitos:
    Se debe crear una función declarada.
    La función debe recibir un parámetro.
    La función debe devolver el mensaje.
    Se debe llamar a la función dos veces con los nombres indicados.
    Se deben mostrar por consola los dos resultados.
    No se deben modificar los nombres proporcionados.

Salida esperada:
    Bienvenida, Lucía, a Estudio Nébula.
    Bienvenida, Carlos, a Estudio Nébula.

*/

function bienvenida(nombreCliente) {
    console.log(`Bienvenida, ${nombreCliente}, a ${nombreEstudio}`)
}

console.log("#14");
bienvenida("Lucía");
bienvenida("Carlos");


/*
Ejercicio 15. Función para calcular presupuesto
Objetivo: Crear una función con parámetros numéricos y retorno para realizar un cálculo sencillo.
Tiempo estimado: 12 minutos.

Enunciado:
    El estudio quiere calcular el precio final de varios servicios aplicando un descuento fijo.
    Crea una función que reciba dos parámetros:
    el precio base de un servicio,
    el descuento aplicado,
    y devuelva el precio final.
    Después, utiliza la función con estos datos:
    precio base: 1200, descuento: 150
    precio base: 850, descuento: 100
    Muestra por consola el resultado de ambas llamadas.

Requisitos:
    Se debe crear una función declarada.
    La función debe recibir dos parámetros.
    La función debe devolver el resultado con return.
    El descuento debe interpretarse como una cantidad fija, no como un porcentaje.
    Se deben mostrar por consola los dos precios finales obtenidos.
    No se deben modificar los valores proporcionados.

Salida esperada:
    Precio final: 1050
    Precio final: 750
*/

function precioFinal(precioBase, descuento){
    return precioBase - descuento;
}

console.log("#15");
console.log(precioFinal(1200, 150));
console.log(precioFinal(850, 100));


/*
Ejercicio 16. Función para mostrar horario
Objetivo: Reutilizar una función para generar textos a partir de distintos datos.
Tiempo estimado: 10 minutos.

Enunciado:
    El estudio quiere reutilizar una misma función para mostrar distintos horarios de atención.
    Crea una función que reciba dos parámetros:
    hora de apertura,
    hora de cierre,
    y devuelva un texto con este formato:
    Horario de atención: de [apertura] a [cierre].
    Después, llama a la función con estos horarios:
    9:00 y 14:00
    10:00 y 18:00
    Muestra por consola el resultado de ambas llamadas.

Requisitos:
    Se debe crear una función declarada.
    La función debe recibir dos parámetros.
    La función debe devolver el texto usando return.
    Se deben mostrar por consola los dos horarios generados
    No se deben modificar los valores proporcionados.

Salida esperada:
    Horario de atención: de 9:00 a 14:00.
    Horario de atención: de 10:00 a 18:00.

*/

function mostrarHorario(horaApertura, horaCierre) {
    return `Horario de atención: de ${horaApertura} a ${horaCierre}`;
}

console.log("#16");
console.log(mostrarHorario("9:00", "14:00"));
console.log(mostrarHorario("10:00", "18:00"));


/*
Ejercicio 17. Función que decide la recomendación
Objetivo: Combinar funciones y condicionales para devolver una recomendación en función de un presupuesto.
Tiempo estimado: 14 minutos.

Enunciado:
    El estudio clasifica las recomendaciones según estos tramos de presupuesto:
    si el presupuesto es menor que 1000, se recomienda Growth Hacking,
    si el presupuesto es igual o mayor que 1000 y menor que 1800, se recomienda Diseño Web,
    si el presupuesto es igual o mayor que 1800, se recomienda Diseño Web + Desarrollo.
    Crea una función que reciba el presupuesto de un cliente y devuelva la recomendación correspondiente.
    Después, prueba la función con estos presupuestos:
    900
    1500
    2200
    Muestra por consola el resultado de las tres llamadas.

Requisitos:
    Se debe crear una función declarada.
    La función debe recibir un parámetro numérico.
    Se debe usar una estructura if...else if...else dentro de la función.
    La función debe devolver una cadena con la recomendación final.
    Se deben mostrar por consola los tres resultados.
    No se deben modificar los tramos ni los presupuestos proporcionados.

Salida esperada:
    Se recomienda Growth Hacking.
    Se recomienda Diseño Web.
    Se recomienda Diseño Web + Desarrollo.
*/

function clasificaRecomendacion(presupuesto) {
    let prefijo = "Se recomienda";
    if (presupuesto < 1000) {
        return prefijo + servicios[1];
    } else if (presupuesto < 1800) {
        return prefijo + servicios[0];
    } else {
        return prefijo + servicios[2];
    }
}


console.log("#17");
recomendacion = clasificaRecomendacion(900);
console.log(recomendacion);

recomendacion = clasificaRecomendacion(1500);
console.log(recomendacion);

recomendacion = clasificaRecomendacion(2200);
console.log(recomendacion);


/*
Ejercicio 18. Función para contar palabras
Objetivo: Trabajar con funciones y cadenas para obtener información básica de un texto.
Tiempo estimado: 12 minutos.

Enunciado:
    El estudio quiere contar cuántas palabras tienen algunos de sus mensajes promocionales.
    Crea una función que reciba un texto y devuelva cuántas palabras contiene.
    Después, prueba la función con estos textos:
    Transformamos ideas digitales
    Entrega en 7 días
    Diseñamos y desarrollamos soluciones web a medida
    Muestra por consola el número de palabras de cada texto.

Requisitos:
    Se debe crear una función declarada.
    La función debe recibir un texto como parámetro.
    La función debe devolver un número.
    Se puede resolver de forma básica separando el texto por espacios.
    Se deben mostrar por consola los resultados de las tres pruebas.
    No se deben modificar los textos proporcionados.

Salida esperada:
    Número de palabras: 3
    Número de palabras: 4
    Número de palabras: 7
*/

function contarPalabras(texto) {
    return texto.split(" ").length;
}

console.log(`Número de palabras: ${contarPalabras("Transformamos ideas digitales")}`);
console.log(`Número de palabras: ${contarPalabras("Entrega en 7 días")}`);
console.log(`Número de palabras: ${contarPalabras("Diseñamos y desarrollamos soluciones web a medida")}`);


/*
Ejercicio 19. Ampliación opcional: valores por defecto
Objetivo: Utilizar parámetros con valores por defecto en una función.
Tiempo estimado: 8 minutos.

Enunciado:
    Partiendo de la idea del ejercicio 15, modifica la función de cálculo de presupuesto para que, si no se indica descuento, utilice un descuento por defecto de 50.
    Después, realiza estas dos llamadas:
    precio base: 1200, descuento: 150
    precio base: 850, sin indicar descuento
    Muestra por consola el resultado de ambas llamadas.

Requisitos:
    Se debe usar un valor por defecto en el parámetro del descuento.
    La función debe devolver el precio final con return.
    Se debe hacer una llamada indicando descuento y otra sin indicarlo.
    Se deben mostrar por consola ambos resultados.
    No se deben modificar los valores proporcionados.

Salida esperada:
    Precio final: 1050
    Precio final: 800
*/



/*
Ejercicio 20. Función expresión y función flecha
Objetivo: Reescribir una misma función utilizando distintas sintaxis de JavaScript.
Tiempo estimado: 10 minutos.

Enunciado:
    Toma como base la función del ejercicio 14, que devuelve un mensaje de bienvenida para un cliente.
    A partir de esa función, crea tres versiones que hagan exactamente lo mismo:
    una función declarada,
    una función expresión,
    una función flecha.
    Después, prueba las tres versiones usando el nombre:
    Marta
    Muestra por consola el resultado de cada una.

Requisitos:
    Las tres funciones deben devolver el mismo mensaje.
    Se debe utilizar el mismo nombre en las tres pruebas.
    Se deben mostrar por consola los tres resultados.
    No se debe usar this ni arguments.
    No se debe modificar el texto del mensaje de bienvenida.

Salida esperada:
    Precio final: 1050
    Precio final: 800
*/



/*
Bloque 6. Parámetros, argumentos y scope

Ejercicio 21. Parámetros y argumentos en una función
Objetivo: Diferenciar entre parámetros y argumentos a través de una función que reciba datos y devuelva un resultado.
Tiempo estimado: 10 minutos.

Enunciado:
    El estudio quiere calcular el precio final de varios servicios usando una misma función.
    Crea una función llamada calcularPrecioFinal que reciba dos parámetros:
    precioBase
    descuento
    La función debe devolver el precio final después de restar el descuento al precio base.
    Después, llama a la función con estos datos:
    1200 y 150
    850 y 100
    Muestra por consola el resultado de ambas llamadas.
    Además, añade dos comentarios en tu código indicando:
    cuáles son los parámetros de la función,
    cuáles son los argumentos usados en cada llamada.

Requisitos:
    Se debe crear una función declarada.
    La función debe recibir exactamente dos parámetros.
    La función debe devolver el resultado usando return.
    Se deben realizar exactamente dos llamadas con los valores indicados.
    Se debe mostrar por consola el resultado de ambas llamadas.
    Se deben añadir comentarios identificando parámetros y argumentos.
    No se deben modificar los valores proporcionados.

Salida esperada:
    Precio final: 1050
    Precio final: 750
*/



/*
Ejercicio 22. Scope global y local
Objetivo: Comprobar la diferencia entre una variable global y una variable local dentro de una función.
Tiempo estimado: 10 minutos.

Enunciado:
El estudio quiere mostrar información general y una campaña concreta.

Crea:
    una variable global llamada nombreEstudio con el valor Estudio Nébula,
    una función llamada mostrarCampana dentro de la cual declares una variable local llamada mensajeCampana con el valor Entrega rápida disponible.
A continuación:
    muestra por consola, fuera de la función, el nombre del estudio,
    dentro de la función, muestra por consola un mensaje que incluya el nombre del estudio y el mensaje de campaña,
    llama a la función para que se ejecute.

Requisitos:
    Se debe crear una variable global.
    Se debe crear una variable local dentro de la función.
    La variable global debe usarse tanto fuera como dentro de la función.
    La variable local solo debe usarse dentro de la función.
    Se deben mostrar por consola exactamente dos mensajes:
    uno fuera de la función,
    otro dentro de la función.
    No se debe intentar mostrar la variable local fuera de la función.
    No se deben modificar los valores proporcionados.

Salida esperada:
    Nombre del estudio: Estudio Nébula
    Estudio Nébula - Entrega rápida disponible
*/



/*
Ejercicio 23. Ampliación opcional: función con parámetro rest
Objetivo: Utilizar un parámetro rest para recoger varios valores en una misma función.
Tiempo estimado: 8 minutos.

Enunciado:
    El estudio quiere sumar en una sola función el precio de varios servicios contratados.
    Crea una función llamada sumarServicios que utilice un parámetro rest para recibir varios importes y devuelva la suma total.
    Después, realiza una llamada con estos valores:
    1200
    850
    1600
    Muestra por consola el resultado.

Requisitos:
    Se debe usar un parámetro rest.
    La función debe devolver la suma total.
    Se debe realizar una única llamada con los tres importes indicados.
    Se debe mostrar por consola el resultado final.
    No se deben modificar los valores proporcionados.

Salida esperada:
    Total contratado: 3650
*/



/*
Bloque 7. Objetos

Ejercicio 24. Crear un objeto literal para un servicio
Objetivo: Crear un objeto mediante notación literal y acceder a sus propiedades.
Tiempo estimado: 12 minutos.

Enunciado:
    El estudio quiere guardar la información de uno de sus servicios en un objeto.
    Crea un objeto literal llamado servicioWeb con estas propiedades y valores:
    nombre: Diseño Web
    precio: 1200
    duracionSemanas: 4
    incluyeSoporte: true
    Después, muestra por consola el valor de cada una de las propiedades.

Requisitos:
    Se debe crear el objeto usando notación literal.
    El objeto debe contener exactamente las cuatro propiedades indicadas.
    Se debe mostrar por consola cada propiedad por separado.
    No se deben modificar los nombres ni los valores proporcionados.

Salida esperada:
    Nombre: Diseño Web
    Precio: 1200
    Duración: 4
    Incluye soporte: true
*/



/*
Ejercicio 25. Crear un objeto con el constructor Object()
Objetivo: Crear un objeto utilizando new Object() y asignarle propiedades manualmente.
Tiempo estimado: 12 minutos.

Enunciado:
    El estudio quiere almacenar los datos de una clienta en un objeto.
    Crea un objeto llamado cliente usando new Object() y añade después estas propiedades:
    nombre: Lucía
    email: lucia@nebula.com
    presupuesto: 1500
    quiereExpress: true
    Después, muestra por consola el valor de cada una de las propiedades.

Requisitos:
    Se debe crear el objeto usando new Object().
    Las propiedades se deben añadir después de crear el objeto.
    Se deben mostrar por consola las cuatro propiedades.
    No se deben modificar los nombres ni los valores proporcionados.

Salida esperada:
    Nombre: Lucía
    Email: lucia@nebula.com
    Presupuesto: 1500
    Quiere express: true
*/



/*
Ejercicio 26. Añadir, modificar y eliminar propiedades
Objetivo: Manipular propiedades de un objeto añadiendo una nueva, modificando otra y eliminando una existente.
Tiempo estimado: 12 minutos.

Enunciado:
    Partiendo del siguiente objeto:
    nombre: Redesign E-commerce Moda
    tipo: Tienda online
    destacado: true
    Crea un objeto llamado proyecto con esas propiedades y realiza después estas acciones:
    añade una propiedad llamada plazoDias con el valor 7,
    modifica la propiedad tipo para que pase a valer E-commerce premium,
    elimina la propiedad destacado.
    Por último, muestra por consola el objeto final.

Requisitos:
    Se debe crear primero el objeto con las tres propiedades iniciales.
    Después se debe añadir una propiedad nueva.
    Después se debe modificar una propiedad existente.
    Después se debe eliminar una propiedad.
    Se debe mostrar por consola el objeto final.
    No se deben modificar los valores indicados salvo en el cambio pedido en tipo.

Salida esperada:
    { nombre: 'Redesign E-commerce Moda', tipo: 'E-commerce premium', plazoDias: 7 }
*/



/*
Ejercicio 27. Método dentro de un objeto
Objetivo: Definir un método dentro de un objeto para devolver información formateada.
Tiempo estimado: 14 minutos.

Enunciado:
    El estudio quiere que cada proyecto pueda generar su propio resumen.
    Crea un objeto llamado proyecto con estas propiedades:
    nombre: Dashboard Financiero SaaS
    cliente: FinanData
    duracionSemanas: 6
    Añade además un método llamado mostrarResumen que devuelva este texto:
    Proyecto Dashboard Financiero SaaS para FinanData. Duración: 6 semanas.
    Después, llama al método y muestra su resultado por consola.

Requisitos:
    Se debe crear un objeto con las tres propiedades indicadas.
    Se debe añadir un método dentro del objeto.
    El método debe devolver el texto con return.
    Se debe llamar al método y mostrar su resultado por consola.
    No se deben modificar los valores proporcionados.

Salida esperada:
    Proyecto Dashboard Financiero SaaS para FinanData. Duración: 6 semanas.
*/



/*
Ejercicio 28. Recorrer un objeto con for...in
Objetivo: Recorrer las propiedades de un objeto utilizando for...in.
Tiempo estimado: 12 minutos.

Enunciado:
    El estudio quiere revisar toda la información guardada sobre un servicio.
    Crea un objeto llamado servicio con estas propiedades:
    nombre: Growth Hacking
    precio: 850
    incluyeSeo: true
    Recorre el objeto usando for...in y muestra por consola cada propiedad con este formato:
    [clave]: [valor]

Requisitos:
    Se debe crear el objeto con las tres propiedades indicadas.
    Se debe usar un bucle for...in.
    Se debe mostrar una línea por cada propiedad del objeto.
    No se debe acceder manualmente una a una a las propiedades fuera del bucle.
    No se deben modificar los valores proporcionados.

Salida esperada:
    nombre: Growth Hacking
    precio: 850
    incluyeSeo: true
*/



/*
Ejercicio 29. Personalizar toString() en un objeto creado con constructor
Objetivo: Modificar el método toString() del prototipo de un constructor para obtener una representación en texto de un objeto.
Tiempo estimado: 14 minutos.

Enunciado:
    El estudio quiere poder obtener un resumen en texto de cada servicio creado mediante un constructor.
    Crea un constructor llamado Servicio que permita generar objetos con estas propiedades:
    nombre
    precio
    incluyeSeo
    Después, realiza las siguientes acciones:
    modifica el método toString() del prototipo de Servicio para que devuelva un texto con este formato:
    Nombre del proyecto: [valor]
    Precio de proyecto:  [valor]
    ¿Incluye SEO?:  [valor]
    crea un objeto a partir del constructor con estos valores:
    nombre: Growth Hacking
    precio: 850
    incluyeSeo: true
    muestra por consola el resultado de llamar al método toString() sobre ese objeto.

Requisitos:
    Se debe crear un constructor llamado Servicio.
    El constructor debe recibir los tres valores indicados como parámetros.
    Se debe modificar toString() en el prototipo del constructor.
    El método toString() debe devolver el texto usando return.
    Se debe crear un único objeto con los valores proporcionados.
    Se debe mostrar por consola el resultado de toString().
    No se deben modificar los nombres ni los valores proporcionados.

Salida esperada:
    Nombre del proyecto: Growth Hacking
    Precio de proyecto: 850€
    ¿Incluye SEO?: true
*/



/*
Ejercicio 30. Crear un método para mostrar la información de un objeto
Objetivo: Añadir un método al prototipo de un constructor para mostrar por consola la información completa de un objeto.
Tiempo estimado: 14 minutos.

Enunciado:
    El estudio quiere que cada servicio creado mediante un constructor pueda mostrar su propia información al ejecutarse un método.
    Crea un constructor llamado Servicio que permita generar objetos con estas propiedades:
    nombre
    precio
    incluyeSeo
    Después, realiza las siguientes acciones:
    crea en el prototipo de Servicio un método llamado mostrarValores
    ese método debe devolver la información del objeto con este formato:
    Nombre del proyecto: [valor]
    Precio de proyecto:  [valor]
    ¿Incluye SEO?:  [valor]
    crea un objeto a partir del constructor con estos valores:
    nombre: Growth Hacking
    precio: 850
    incluyeSeo: true
    llama al método mostrarValores() y comprueba su funcionamiento.

Requisitos:
    Se debe crear un constructor llamado Servicio.
    El constructor debe recibir los tres valores indicados como parámetros.
    Se debe crear un método llamado mostrarValores en el prototipo del constructor.
    El método debe mostrar por consola la información completa del objeto.
    Se debe crear un único objeto con los valores proporcionados.
    Se debe llamar al método mostrarValores().
    No se deben modificar los nombres ni los valores proporcionados.

Salida esperada:
    Nombre del proyecto: Growth Hacking
    Precio de proyecto: 850€
    ¿Incluye SEO?: true
*/



/*
Ejercicio 31. Obtener claves, valores y entradas de un objeto
Objetivo: Utilizar Object.keys(), Object.values() y Object.entries() para obtener información estructurada de un objeto.
Tiempo estimado: 14 minutos.

Enunciado:
    El estudio quiere analizar los datos de una clienta desde distintas perspectivas.
    Crea un objeto llamado cliente con estas propiedades:
    nombre: Marta
    email: marta@correo.com
    premium: true
    Después:
    obtén sus claves con Object.keys(),
    obtén sus valores con Object.values(),
    obtén sus entradas con Object.entries().
    Muestra por consola el resultado de las tres operaciones.

Requisitos:
    Se debe crear el objeto con las tres propiedades indicadas.
    Se deben usar Object.keys(), Object.values() y Object.entries().
    Se debe mostrar por consola el resultado de cada una de las tres operaciones.
    No se deben modificar los valores proporcionados.

Salida esperada:
    Claves: nombre,email,premium
    Valores: Marta,marta@correo.com,true
    Entradas: nombre,Marta | email,marta@correo.com | premium,true
*/



/*
Bloque 8. DOM
Estructura base para todo el bloque 8
Para realizar los ejercicios de este bloque, parte de esta estructura HTML:
<section id="estudio">
  <h1 id="titulo">Estudio Nébula</h1>
  <p class="descripcion">Soluciones digitales para pequeños negocios.</p>

  <ul id="servicios">
    <li class="servicio">Diseño Web</li>
    <li class="servicio">Growth Hacking</li>
    <li class="servicio">Desarrollo</li>
  </ul>

  <a id="contacto" href="contacto.html" target="_blank">Contactar</a>

  <div id="proyectos">
    <article class="proyecto">Redesign E-commerce Moda</article>
    <article class="proyecto">Dashboard Financiero SaaS</article>
  </div>

  <input id="nombreCliente" type="text" value="Lucía">

  <div id="mensaje"></div>
</section>
*/



/*
Ejercicio 32. Seleccionar elementos del DOM
Objetivo: Seleccionar elementos del documento utilizando distintos métodos de acceso al DOM.
Tiempo estimado: 12 minutos.

Enunciado:
    A partir de la estructura HTML proporcionada, selecciona los siguientes elementos del documento:
    el elemento con id titulo,
    todos los elementos con clase servicio,
    todos los elementos article,
    el primer elemento que tenga la clase descripcion,
    todos los elementos con clase proyecto.
    Después, muestra por consola el resultado de cada selección.

Requisitos:
    Se debe usar getElementById() para seleccionar el título.
    Se debe usar getElementsByClassName() para seleccionar los servicios.
    Se debe usar getElementsByTagName() para seleccionar los artículos.
    Se debe usar querySelector() para seleccionar la descripción.
    Se debe usar querySelectorAll() para seleccionar los proyectos.
    Se debe mostrar por consola el resultado de cada selección.
    No se debe modificar el HTML proporcionado.

Salida esperada:
    Se deben mostrar por consola las referencias a los elementos seleccionados.
*/



/*
Ejercicio 33. Modificar contenido de los elementos
Objetivo: Modificar el contenido de los elementos del DOM usando textContent, innerHTML y value.
Tiempo estimado: 12 minutos.

Enunciado:
    A partir de la estructura HTML proporcionada, realiza las siguientes modificaciones:
    cambia el texto del título para que pase a ser Estudio Nébula 2026,
    cambia el contenido del elemento con id mensaje para que muestre el texto:
    Presupuesto enviado correctamente.
    cambia el valor del input con id nombreCliente para que pase a ser Marta.

Requisitos:
    Se debe usar textContent para modificar el título.
    Se debe usar innerHTML para modificar el contenido del mensaje.
    Se debe usar value para modificar el valor del input.
    Se debe realizar exactamente las tres modificaciones indicadas.
    No se deben modificar otros elementos distintos a los indicados.

Salida esperada:
    Tras ejecutar el script:
    el título debe mostrar Estudio Nébula 2026,
    el div mensaje debe contener Presupuesto enviado correctamente.,
    el input debe tener como valor Marta.
*/



/*
Ejercicio 34. Modificar atributos
Objetivo: Consultar, añadir, modificar y eliminar atributos de un elemento del DOM.
Tiempo estimado: 12 minutos.

Enunciado:
    Trabaja con el enlace que tiene id contacto.
    Realiza las siguientes acciones:
    obtén el valor actual de su atributo href y muéstralo por consola,
    cambia el valor de href para que pase a ser presupuesto.html,
    añade un atributo title con el valor Ir al formulario de presupuesto,
    elimina el atributo target.

Requisitos:
    Se debe usar getAttribute() para obtener el valor inicial de href.
    Se debe usar setAttribute() para modificar href.
    Se debe usar setAttribute() para añadir title.
    Se debe usar removeAttribute() para eliminar target.
    Se debe mostrar por consola el valor original de href.
    No se debe modificar otros atributos distintos a los indicados.

Salida esperada:
    Atributo href original: contacto.html
*/



/*
Ejercicio 35. Crear y añadir un elemento nuevo
Objetivo: Crear un elemento con JavaScript y añadirlo al documento usando createElement() y appendChild().
Tiempo estimado: 14 minutos.

Enunciado:
    El estudio quiere añadir un nuevo servicio a la lista existente.
    Crea un nuevo elemento li con el texto SEO Técnico y añádelo al final de la lista con id servicios.

Requisitos:
    Se debe usar createElement() para crear el nuevo elemento.
    Se debeasignar al nuevo elemento el texto SEO Técnico.
    Se debeusar appendChild() para añadirlo a la lista.
    El nuevo elemento debe quedar al final del listado.
    No se deben modificar los elementos que ya existían en la lista.

Salida esperada:
    La lista de servicios debe quedar así:

    Diseño Web
    Growth Hacking
    Desarrollo
    SEO Técnico
*/



/*
Ejercicio 36. Eliminar un elemento del documento
Objetivo: Eliminar un elemento existente del DOM utilizando remove().
Tiempo estimado: 10 minutos.

Enunciado:
    El estudio quiere dejar de mostrar temporalmente el proyecto Dashboard Financiero SaaS.
    Selecciona el segundo elemento con clase proyecto y elimínalo del documento.

Requisitos:
    Se debe seleccionar correctamente el elemento que se va a eliminar.
    Se debe usar remove().
    Solo se debe eliminar un proyecto.
    No se debe eliminar el proyecto Redesign E-commerce Moda.

Salida esperada:
    Después de ejecutar el script, dentro de #proyectos solo debe quedar:
    Redesign E-commerce Moda
*/



/*
Ejercicio 37. Navegación por el DOM
Objetivo: Acceder a elementos relacionados dentro del DOM utilizando navegación entre nodos.
Tiempo estimado: 14 minutos.

Enunciado:
    Trabaja con la estructura HTML proporcionada y realiza las siguientes acciones:
    selecciona la lista con id servicios y muestra por consola su elemento padre,
    muestra por consola todos sus hijos,
    selecciona el primer elemento con clase proyecto y muestra cuál es su siguiente hermano,
    selecciona el segundo elemento con clase proyecto y muestra cuál es su hermano anterior.

Requisitos:
    Se debe usar parentElement.
    Se debe usar children.
    Se debe usar nextElementSibling.
    Se debe usar previousElementSibling.
    Se debe mostrar por consola el resultado de las cuatro acciones.
    No se debe modificar el HTML proporcionado.

Salida esperada:
    Se deben mostrar por consola las referencias a los elementos obtenidos en cada caso.
*/



/*
Ejercicio 38. Ampliación opcional: crear un aviso y eliminarlo
Objetivo: Combinar creación y eliminación de elementos del DOM en un mismo ejercicio.
Tiempo estimado: 12 minutos.

Enunciado:
    Crea un elemento p con el texto Promoción activa esta semana y añádelo dentro del div con id mensaje.
    Después de añadirlo, elimínalo del documento.

Requisitos:
    Se debe usar createElement().
    Se debe usar appendChild().
    Se debe usar remove().
    El elemento debe insertarse primero y eliminarse después.
    No se debe modificar el contenido de otros elementos.

Salida esperada:
    El párrafo debe llegar a insertarse en #mensaje y después desaparecer.

*/