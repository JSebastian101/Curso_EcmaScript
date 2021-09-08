// Object. entries
// Nos permite devolver la clave y los valores de una matriz.
const data = {
    fontend: 'Jhon',
    backend: 'Sebastian',
    desing: 'Ana',
}

const entries = Object.entries(data);
console.log(entries) // [ [ 'fontend', 'Jhon' ],
// [ 'backend', 'Sebastian' ],
// [ 'desing', 'Ana' ] ]

// si queremos saber cuantos elementos tiene un objeto
console.log(entries.length); // 3 

// Object values
// Me regresa los valores (no con las llaves) de un objeto a un arreglo
const datos = {
    fontend: 'Jhon',
    backend: 'Sebastian',
    desing: 'Ana',
}

// como hacer la tranformación

const values = Object.values(datos);
console.log(values) // [ 'Jhon', 'Sebastian', 'Ana' ]
//también puedo conocer cuantos elementos contenía neustro objeto
console.log(values.length); // 3

// PADDING 
// Nos puede servir para presentar una estructura de elementos, una lista de menú o lista de cosas para comprar
const string = 'hello';
console.log(string.padStart(7, 'hi '))
console.log(string.padEnd(12, '-----'))