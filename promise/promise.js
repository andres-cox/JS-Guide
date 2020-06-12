let promise = new Promise((resolve, reject) => {
    let a = 1 + 2;
    if (a == 2) {
        resolve('Success')
    } else {
        reject('Failed')
    }
})

promise.then((message) => {
    console.log(`This is in then Promise ${message}`)
}).catch((message) => {
    console.log(`This is in catch Promise ${message}`)
})

const someFunction = (username, password) => {
    return new Promise((resolve, reject) => {

        if (username == "mypromise" && password == 24) {
            resolve("Stuff worked!");
        } else {
            reject(Error("It broke"));
        }
    });
};

someFunction('mypromise', 24).then(message => {
    console.log(message);
})

const TMDbMoviesResponse = new Promise((resolve, reject) => {
    resolve('Got Movies')
})

const TMDbTVShowsResponse = new Promise((resolve, reject) => {
    resolve('Got TVShows')
})

const TMDbPeopleResponse = new Promise((resolve, reject) => {
    resolve('Got People')
})

Promise.all([ //.race to get the first resolve from the promises
    TMDbMoviesResponse,
    TMDbTVShowsResponse,
    TMDbPeopleResponse
]).then((messages) => console.log(messages))