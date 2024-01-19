let promesaConError = new Promise((resolve, reject) => {
    // Simulando un error durante la ejecución
    reject('Algo salió mal...');
});

// Manejando la promesa con error
promesaConError.then((mensaje) => {
    console.log(mensaje);
}).catch((error) => {
    console.error(error);
});