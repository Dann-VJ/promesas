// Peticion post

let user = {
    name: 'John',
    surname: 'Smith'
};

fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
        'Content-Type': 'application/json'
    }gi
})
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(error => console.log(error));
