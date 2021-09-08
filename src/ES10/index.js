// Array.flat nos permite regresar una matriz con sus submatrices
//  aplanadas
let array = [1,2,3, [1,2,3,[1,2,3]]];

console.log(array.flat())
// a flat debemos indicarle entre parentesis
//  la profundidad, si no se indica aplanará solo un nivel

// FLAT MAp
// Me permite mapear cada elemento, pasarle una función y aplanarlo según el resultado
let array2 = [1,2,3,4,5];
console.log(array2.flatMap(value => [[value, value * 2]]));

// Trim star 
// Permite eliminar los espacios en blanco de un string 
let hello = '                  hello world';
console.log(hello);
console.log(hello.trimStart());
// Trim end
let hello1 = 'Hello world                         ';
console.log(hello1)
console.log(hello1.trimEnd());

// Optinal catch binding
// Nos permite pasar de forma opcional el parametro de error al valor de catch

// anteriormente se trabajaba así

try {
} catch (error) {
    error
}

// Siendo opcional ahora lo podemos dejar así, pues ya está dentro del bloque del codigo del catch 
try {
} catch {
    error
}


// From entries 
// Tranforma clave valor en un objeto, por si estoy trabajando con arreglos y quiera pasarlo a objetos
let entries = [["name", "Jhon"]["age", 32]];
// así se estructura un arreglo que tiene dos elementos que queremos convertir en objetos llave y valor}
console.log(Object.fromEntries(entries))

// Objeto de tipo simbolo
// Nos permite acceder a la descripción de un objeto tipo simbolo
let mySymbl = `My Symbol`
let symbol = Symbol(mySymbl);
console.log(symbol.description);