// Peticion get

fetch('https://platzi.com')
    .then(res => res.text())
    .then(html => {
        document.open()
        document.write(html)
        document.close()
    })


    