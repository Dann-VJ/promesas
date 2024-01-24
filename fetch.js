//  Manejor de error
fetch('https://pokeapi.co/api/v2/pokemon/-1')
    .then(response => {
        if (response.ok) {
            return response.json()
        } else {
            throw new Error('No existe el pokemon')
        }
    })
    .then(console.log)
    .catch(error => {
        console.log('Error en la petición')
        console.log(error)
    })

