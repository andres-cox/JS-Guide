let myVariable1 = 2;
try {
    console.log(myVriable + 77);
} catch (e) {
    console.log('Oopsies -', e);   //ReferenceError: myVriable is not defined
    // 'e' has name and message
}


//THROWING CUSTOM ERRORS
let myVariable2 = 2;  //prompt('Give me a number');

try {
    if (isNaN(+myVariable2)) {
        // throws if the value provided can't be coerced to a number
        //throw new Error('Not a number!');     //normal error message
        throw new TypeError('Not a number!');   //error type
    }
    console.log('Good choice', myVariable2);
} catch (e) {
    if (e.name === 'TypeError') {
        console.log(e);
    } else {
        throw e;        //custom JS Error 
    }
}

//TRY..CATCH..FINALLY
let myVariable3 = 2;
try {
    console.log(myVriable + 77);
} catch (e) {
    console.log('Oopsies -', e);
} finally {
    console.log('finally: Runs no matter what');
}

//TRY..FINALLY
try {
    document.querySelector('.not-there').style.backgroundColor = 'pink';
} catch (e) {
    console.log('Oh no -', e);
} finally {
    console.log('Finally runs');
}
console.log('After try block');

// Result:
// Oh no - TypeError: Cannot read property 'style' of null
// Finally runs
// After try block

try {
    document.querySelector('.here2').style.backgroundColor = 'pink';
} finally {
    console.log('Finally runs');
}
console.log('After try block');     //This code is not running because we dont catch the error, so the program crashes

// Result:
// Finally runs
// Uncaught TypeError: Cannot read property 'style' of null


//Notice how, when the catch clause is missing, the error is uncaught and the program crashes, but only after running the code in our finally clause.