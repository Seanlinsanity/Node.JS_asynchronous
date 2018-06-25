console.log('Before')

//Asynchronous
//getUser(1, readUser)
const promise = getUser(1)
promise
        .then(user => getRepositories(user.gitHubUsername))
        .then(repos => {console.log('First Repository: ', repos[0])})
        .catch(err => console.log("Error: ", err.message))

console.log('After')

function getUser(id){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Reading a user from a database')
            resolve({id: id, gitHubUsername: 'Sean'})
        }, 2000)
    })
}

// function getUser(id, callback){
//         setTimeout(() => {
//             console.log('Reading a user from a database')
//             callback({id: id, gitHubUsername: 'Sean'})
//         }, 2000)
// }



function readUser(user){
    getRepositories(user.gitHubUsername, callGitHubRepositories)
}

function callGitHubRepositories(repos){
    console.log('Repositories: ', repos)
}

function getRepositories(username) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Calling ' + username + ' GitHub Repositories')
            resolve(['repo1', 'repo2', 'repo3'])
        }, 2000) 
    })
}

// function getRepositories(username, callback) {
//     setTimeout(() => {
//         console.log('Calling ' + username + 'GitHub Repositories')
//         callback(['repo1', 'repo2', 'repo3'])
//     }, 2000)
// }