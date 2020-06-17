function makeRequest(location) {
    return new Promise((resolve, reject) => {
        console.log(`Making request to ${location}`);
        (location == 'Google') ? resolve('Google says hi') : reject('We can only talk to google');
    })
}

function processRequest(response) {
    return new Promise((resolve, reject) => {
        console.log('Processing response');
        resolve(`Extra information -> ${response}`);
    })
}

// This is an example of chaining promises
// makeRequest('Google').then(response => {
//     console.log('Response received');
//     return processRequest(response);
// }).then(processedResponse => {
//     console.log(processedResponse);
// }).catch(err => {
//     console.log(err)
// })

//“async” before a function means one simple thing: a function always returns a promise.
async function doWork() {
    try {
        const response = await makeRequest('Google');
        console.log('Response received');
        const processedResponse = await processRequest(response); //await literally makes JavaScript wait until the promise settles
        console.log(processedResponse);                           //That doesn’t cost any CPU resources, because the engine can do other jobs in the meantime: execute other scripts, handle events, etc.  
    } catch (err) {
        console.log(err);
    }
}
//It’s just a more elegant syntax of getting the promise result than promise.then, easier to read and write.

doWork()

// With this function, each const waits to resolve or reject line by line 
async function msg() {
    const a = await who();
    const b = await what();
    const c = await where();

    console.log(`${a} ${b} ${c}`);
}

// With Promise.all all request are made in parallel and wait to have all fulfilled 
async function msg() {
    const [a, b, c] = await Promise.all([who(), what(), where()]);

    console.log(`${a} ${b} ${c}`);
}

// In order to receive a promise you can do it this way
const b = hello();
b.then(x => console.log(x)); // Hello 

hello().then(x => console.log(x)); // Hello 

// Handling error
hello().catch(x => console.log(x));