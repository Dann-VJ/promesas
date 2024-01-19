const cargarDatosDeApi = (url) => {
    return new Promise((resolve, reject) => {
        // Simula una solicitud a una API
        fetch(url)
            .then(response => {
                console.log(`Estado de la respuesta: ${response.status}`)
                if (response.status === 200) {  
                    return response.json()
                } else {
                    throw new Error(`Error en la solicitud: ${response.status}`)
                }
            })
            .then(data => resolve(data))
            .catch(error => {
                reject(`Error en la solicitud: ${error.message}`)
            })
    })
}

// Uso de la función para cargar los datos de una API
const apiURL = 'https://jsonplaceholder.typicode.com/users'

cargarDatosDeApi(apiURL)
    .then(data => {
        console.log(`Datos de la API:`, data)
    })
    .catch(error => {
        console.log(`Error en la solicitud: ${error}`)
    })