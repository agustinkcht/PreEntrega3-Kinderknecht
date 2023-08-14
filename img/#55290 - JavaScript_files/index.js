

// Objeto Math



/*
console.log(Math.E)
console.log(Math.PI)
*/

/*
Math con M caps
consologueamos Euler y Pi
*/ 



// Math.max | Math.min

/*

console.log(Math.max(1, 2, -5, 56, 9))

console.log(Math.min(1, 2, -5, 56, 9))

console.log(Math.max(1, 2, -5, 56, 9, Infinity))

console.log(Math.min(1, 2, -5, 56, 9, -Infinity))

*/


/*

Math.max() retorna el mayor valor
Math.min() retorna el menor valor

muy util para casos en los que hay una enorme cantidad de numeros.

*/




// CEIL - FLOOR - ROUND

/*

const pi = Math.PI
//asigno la constante pi al numero pi.
const po = 6.2624445458910

console.log(Math.ceil(pi))
console.log(Math.ceil(po))

*/


/*
retorna el primer numero entero mayor
en este caso, pi comienza 3.14, el primer numero entero más grande que 3 es 4.
*/

/*
console.log(Math.floor(pi))
console.log(Math.floor(po))

// floor elimina los decimales y transforma a un numero entero






console.log(Math.round(pi))
console.log(Math.round(po))

// round redondea, segun el primer decimal tras el punto

*/









// SQUARE ROOT - raiz cuadrada

/*

const raizCuadrada = 16 ** (1/2)
console.log(raizCuadrada)

*/

// esta es la forma old school de hacer raiz cuadrada

/*

console.log(Math.sqrt(16)) // 4

console.log(Math.sqrt(-16)) // NaN pq es imposible sqrt de negativos

*/










// RANDOM
// genera numero random entre 0 y el 1. incluye al 0 entre sus posibilidades, pero no incluye al 1.



console.log(Math.random())

console.log(Math.random() * 10)
// del 0 al 10

console.log(Math.random() * 50)
// del 0 al 50

console.log(Math.random() * 5 + 10)
// del 10 al 15














// ACTIVIDAD EN CLASE

/*

* Generar un número aleatorio entre 1 y 100.
* Redondear el número 4.89 al entero más cercano.
* Calcular la raíz cuadrada de 25.
* Obtener el valor absoluto de -15.
* Obtener el valor máximo entre 4, 18 y 10.
* Obtener el valor mínimo entre 5, 13 y 7.
* Generar un número decimal aleatorio entre 0 y 1.
* Redondear hacia abajo el número 6.7.
* Redondear hacia arriba el número 3.2.
* Obtener la fecha actual.

*/

/*

console.log(Math.random() * 1 * 100)

console.log(Math.round(4.89))

console.log(Math.sqrt(25))

console.log(Math.abs(-15))

console.log(Math.max(4, 18, 10))

console.log(Math.min(5, 13, 7))

console.log(Math.random())

console.log(Math.floor(6.7))

console.log(Math.round(3.2))

*/










//-------------------------------------------










// CLASE DATE
// me da la fecha y hora local.

/*

const diaDeHoy = new Date()

console.log(diaDeHoy)


// A partir de esta instancia de la clase, modificamos lo que consologuea para que aparezca mas cercano a como lo queremos ver.


console.log(new Date(1992, 2, 22))

// ojo! los meses los toma de 0 a 11
// por ende, el mes 2 es marzo.

console.log(new Date(2023, 0, 1))
// 1/1/23

console.log(new Date(2023, 11, 24, 23, 59, 59))
// un segundo antes que navidad.

*/










// .to PARA MODIFICAR LA FECHA A FORMATOS

/*

const diaDeHoy = new Date()

console.log( diaDeHoy.toDateString()) //saca la hora
console.log( diaDeHoy.toLocaleString()) // convierte a formato local 
console.log( diaDeHoy.toLocaleDateString()) // formato local sin hora
console.log(diaDeHoy.toTimeString()) // formato completo con la data gmt, aplicado al lugar.

*/








// DATE CON GET
//getMonth() - getFullYear() - getDay

/*

console.log(diaDeHoy.getFullYear()) // retorna el año 

console.log(diaDeHoy.getMonth()) // retorna 6 (pq estamos en el mes 7)

console.log(diaDeHoy.getDay()) // retorna el dia (hoy es jueves (num 4 de la semana))

*/







// CUANTOS DIAS FALTAN PARA NAVIDAD?

/*

// armamos navidad

const diaDeHoy = new Date() // tenemos dia de hoy

const navidad = new Date(2023, 11, 25)
console.log(navidad) // tenemos navidad


//cuantos dias faltan para navidad?

console.log(navidad - diaDeHoy) //milisegundos

const milisegundos = 1 * 24 * 60 * 60 * 1000
console.log(milisegundos)

console.log((navidad - diaDeHoy) / milisegundos) 

console.log("Para Navidad faltan " + Math.round((navidad - diaDeHoy) / milisegundos) + " días!")

*/











// EJEMPLO PRÁCTICO CON DATE, PARA CALCULAR TIEMPO DE PROCESO

/*

const inicio = new Date()

for (let i = 0; i < 1000; i++) {
        console.log(" Consoles logs")
}

const final = new Date

console.log("El proceso tardó: " + (final - inicio)/1000 + " Segundos")

*/


// hay una diferencia de tiempo entre el primer date y el segundo. porque el primer date consologuea la hora exacta en que inicia, y el final el momento exacto en el que termina. entre medio se ejecuta el ciclo for consologueando 1000 veces.

// queremos saber cuanto tiempo pasó en segundos, por lo que, primero hacemos la resta (final-inicio) que resta los tiempos y lo devuelve en milisegundos, y a ello lo dividimos por 1000 para obtener segundos. 













































