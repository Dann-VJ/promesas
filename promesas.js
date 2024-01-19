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

// Promise.race compite entre las promesas y devuelve la primera que se resuelve
// Si falla una, fallan todas
Promise.race([sumarLento(5), sumarRapido(10)])
    .then(respuestas => {
        console.log(respuestas);
    })
    .catch(console.log);