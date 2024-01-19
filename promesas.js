// Uso de promesas 
// Las promesas son objetos que representan la terminación o el fracaso eventual de una operación asíncrona.

let promesaExitosa = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("La operación fue exitosa");
    }, 3000);
})

// Manejo de promesas
// then: se ejecuta cuando la promesa se resuelve exitosamente
// catch: se ejecuta cuando la promesa falla
promesaExitosa.then((mensaje) => {
    console.log(mensaje);
}).catch((error) => {
    console.log(error);
});