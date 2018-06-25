console.log('Before')

//Asynchronous
getUser(1, readUser)

console.log('After')

function getUser(id, callback){
    setTimeout(() => {
        console.log('Reading a user from a database')
        callback({id: id, gitHubUsername: 'Sean'})
    }, 2000)
}

function readUser(user){
    getRepositories(user.gitHubUsername, callGitHubRepositories)
}

function callGitHubRepositories(repos){
    console.log('Repositories: ', repos)
}

function getRepositories(username, callback) {
    setTimeout(() => {
        console.log('Calling ' + username + 'GitHub Repositories')
        callback(['repo1', 'repo2', 'repo3'])
    }, 2000)
}