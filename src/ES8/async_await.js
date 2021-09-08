const helloWorld = () => {
    return new Promise ((resolve, reject) => {
        (true) 
        ? setTimeout (() => resolve('Hello World'), 3000)
        : reject (new Error ('Test Error'))
    })
}

const helloAsync = async () => {
    const hello = await  helloWorld();
    console.log(hello)
}

helloAsync();

const anotherFunction = async () => {
    try {
        const hello = await helloWorld();
        console.log(hello);
    } catch (error) {
        console.log(error)
    }
}

anotherFunction();
// Las funciones asyn pueden contener una expresión await,
//  la cual pausa la ejecución de la función asincrona y espera la resoluación de la promise pasada
// y posterior reanuda la ejecución del async y devuelve el valor resueto