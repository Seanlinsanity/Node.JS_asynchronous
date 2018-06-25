//Get a promise which is alread resloved
//const promise = Promise.resolve({ id: 1})

//Get a promise which is alread rejected
// const promise = Promise.reject(new Error('Error message here'))
// promise.catch(error => console.log(error))

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Async operation 1')
        resolve(1)
        // reject(new Error('error message...'))
    }, 2000);
})

const promise2 = new Promise((resolve) => {
    setTimeout(() => {
        console.log('Async operation 2')
        resolve(2)
    }, 2000);
})

Promise.all([promise1, promise2])
    .then(result => console.log(result))
    .catch(error => console.log(error.message))

    Promise.race([promise1, promise2])
    .then(result => console.log(result))
    .catch(error => console.log(error.message))