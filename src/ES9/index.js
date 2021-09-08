// Operador de reposo, puede extraer las porpiedades de un objeto que no se ha construido 
const obj = {
    name: 'oscar',
    age: 32,
    country: 'CO'
};

let { name, ...all} = obj;
console.log(name,all);
// Esto nos permite tomar algunos elementos del objeto de acuerdo a nuestar necesidad


// Propagación
// con la esta propiedad podremos unir uno o más elementos de objetos a un nuevo objeto
// Para este ejemplo vamos a unir el obj1 con el obj2
// para realizar este proceso al objeto nuevo que se va a crear se añade el operador (...) 
// y el objeto con el que queremos unirlo seguido de una coma
const obj1 = {
    name: 'oscar',
    age: 32,
};

const obj2 = {
    ...obj1,
    country : 'CO'
}
console.log(obj2)

// Promise.finally
// Nos permite conocer cuando una promesa se ha cumplido para así ejecutar alguna función o logica de código.

const helloWorld = () => {
    return new Promise ((resolve, reject) => {
        (true)
            ? setTimeout(() => {
                resolve('Hello World!')
            }, 3000)
            : reject(new Error ('Test Error'))
    });
}

helloWorld()
    .then (response => console.log(response))
    .catch (error => console.log(error))
    .finally (() => console.log('finalizo'))

// Mejoras en los regex
// Agrupar bloques de rejects y acceder a cada uno de ellos. 

const regexData = /([0.9]{4})-([0-9] {2})-([0-9]{2}])/
const match = regexData.exec('2018-04-20');
const year = match[1]
const month = match[2]
const day = match[3]
console.log(year, month, day)
