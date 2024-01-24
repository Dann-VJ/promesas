// Solicitud para poder clonar la respuesta y poder usarla varias veces
fetch('https://pokeapi.co/api/v2/pokemon/2')
    .then(res => {
        res.clone().json().then(data => {
            console.log(data);
        })
        res.clone().json().then(data => {
            console.log(data);
        })
        res.json().then(data => {
            console.log(data);
        })
    })

    