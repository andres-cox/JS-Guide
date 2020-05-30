//console.log(fetch('https://regres.in/api/users')) // RETURNS A PROMISE

fetch('https://jsonplaceholder.typicode.com/todos/')
    .then(res => {
        if (res.ok) {
            console.log("Successful");
            return res.json();
        } else {
            console.log("Not Successful");
        }
    })      //WE GET A RESPONSE OBJECT
    .then(data => console.log(data[2]))      //WE GET DATA AS JSON
    .catch(error => console.log(error))     // A 404 error is not caught fecth always returns a response (need to check if response is OK)

//POST METHOD
fetch('https://jsonplaceholder.typicode.com/', {
    method: POST,
    headers: {
        'Content-type': 'application/json'
    },
    body: JSON.stringify({
        name: 'user 1'
    })
}).then(res => {
    if (res.ok) {
        console.log("Successful");
        return res.json();
    } else {
        console.log("Not Successful");
    }
})
    .then(data => console.log(data))
    .catch(error => console.log(error))  