// Peticion get

fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(json => console.log(json))

fetch('https://fakestoreapi.com/products/1')
    .then(response => response.json())
    .then(json => console.log(json))

// Traer el producto con id 1 y mostrar solo el precio
fetch('https://fakestoreapi.com/products/1')
    .then(response => response.json())
    .then(json => console.log(json.price))

    git 