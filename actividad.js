/* 1. Realizar una función realizarOperacionesAsincronas que toma un array de
 funciones que devuelven promesas. La función debe ejecutar estas operaciones 
 de forma secuencial, resolviendo cada promesa antes de pasar a la siguiente. 
 Si alguna promesa es rechazada, la función debe detenerse y rechazar con el motivo. */

const corredor1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Corredor 1 con velociadad de 3 seg');
        }, 3000);
    });
}

const corredor2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('Corredor 2 ha fallado');
            // resolve('Corredor 2 con velociadad de 2 seg');
        }, 2000);
    });
}

// Promesa falida para probar el catch y retornar el mensaje de error
const corredor3 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Corredor 3 con velociadad de 1 seg');
        }, 1000);
    });
}

Promise.all([corredor1(), corredor2(), corredor3()])
    .then(respuestas => {
        console.log(respuestas, ' han terminado la carrera');
    })
    .catch(console.log);


/* 2. Crea una función promesaConTimeout que tome una promesa y un tiempo límite
 en milisegundos. La función debe resolver la promesa dentro del tiempo límite. 
 Si la promesa no se resuelve en el tiempo especificado, debería rechazar con 
 un mensaje indicando que se ha agotado el tiempo. */

function promesaConTimeout(promesa, tiempoLimite) {
    const promesaConTiempo = new Promise((resolve, reject) => {
      const timeout = setTimeout(() => {
        reject("Se ha agotado el tiempo...");
      }, tiempoLimite);
  
      promesa.then((resultado) => {
        clearTimeout(timeout);
        resolve(resultado);
      }).catch((error) => {
        clearTimeout(timeout);
        reject(error);
      });
    });
  
    // devolver la primera promesa resuelta o rechazada
    return Promise.race([promesaConTiempo, promesa]);
  }
  
  const promesaOriginal = new Promise((resolver) => {
    setTimeout(() => {
      resolver("¡La promesa se ha resuelto en tiempo!");
    }, 2000);
  });
  
  const tiempoLimite = 2000; 
  
  promesaConTimeout(promesaOriginal, tiempoLimite)
    .then((resultado) => {
      console.log(resultado + " (dentro del tiempo límite de " + tiempoLimite + " ms)");
    })
    .catch((error) => {
      console.error(error);
    });


/* 3. Crea una función esperarNVeces que tome un número n y devuelva una promesa.
 Esta promesa debe resolverse con el mensaje "¡He esperado N veces!" después de 
 esperar 1 segundo por cada número del 1 al n. Por ejemplo, si n es 3, la promesa 
 debería resolverse después de esperar 1 segundo, luego 2 segundos, y finalmente 3 
 segundos. */

function esperarNVeces(n) {
    return new Promise((resolve, reject) => {
        let i = 1;
        let intervalo = setInterval(() => {
            if (i === n) {
                clearInterval(intervalo);
                resolve(`¡He esperado ${n} veces!`);
            }
            i++;
        }, 1000);
    });
}

esperarNVeces(5)
    .then(console.log)
    .catch(console.log);