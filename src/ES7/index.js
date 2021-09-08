// Includes
// Trabaja sobre arreglos o string, nos permite 
// conocer si hay un elemento dentro de un valor
let numbers = [1,2,5,6,8];
//vamos a valirdar si está el 7, y en caso de que esté se realiza un acción
if (numbers.includes(7)){
    console.log('si se encuentra el valor 7');
} else {
    console.log('No se encuentra');
}
// Elevar a la potencia

let base = 4;
let exponente = 3;
let result = base ** exponente;
console.log(result)