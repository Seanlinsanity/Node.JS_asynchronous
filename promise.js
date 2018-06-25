//Promise is a class
//Initially Promise is in pending state
const promise = new Promise((resolve, reject) => {
    //Kick off some async work
    
    //resolve is a function, and reject is also a function

    setTimeout(() => {
        //resolve(1) //pending => resolved, fulfilled
        reject(new Error('error message here')) //pending => rejected

    }, 2000);

})

promise
        .then(result => console.log('Result: ', result))
        .catch(err => console.log('Error: ', err.message))