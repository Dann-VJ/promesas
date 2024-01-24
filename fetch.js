fetch('not-found.html')
    .then(response => response.text())
    .then(html => {
        document.querySelector('body').innerHTML = html
    })
    .catch(error => {
        console.warn('Error en la petición: ', error)   
    })
