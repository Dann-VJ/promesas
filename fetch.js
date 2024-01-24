//  Manejor de error
fetch('https://poeapi.co/api/v2/pokemon/2')
    .then(response => {
        response.json().then(console.log)
    })
    .catch(error => {
        console.log('Error en la petición')
        console.log(error)
    })

