const sumarLento = (numero) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(numero + 1);
            // reject('Sumar lento fallo');
        }, 800);
    });
}

const sumarRapido = (numero) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(numero + 1);
        }, 300);
    });
}

// Promise.all ejecuta todas las promesas y devuelve un arreglo con los resultados
// Si falla una, fallan todas
// Ejecuta todas las promesas en paralelo
Promise.all([sumarLento(5), sumarRapido(10)])
    .then(respuestas => {
        console.log(respuestas);
    })
    .catch(console.log);