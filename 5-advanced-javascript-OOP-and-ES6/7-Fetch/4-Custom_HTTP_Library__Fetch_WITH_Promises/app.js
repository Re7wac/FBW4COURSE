const http = new EasyHTTP;

// //Get Users
// http.get('https://api.github.com/users')
//     .then((val => console.log(val)))
//     .catch(err => console.log(err))


//Creat User
const user = {
    name: 'Mr Shit',
    username: 'bomberman',
    email: 'fok.2@gmail.com'
}

//Post User
// http.post('https://jsonplaceholder.typicode.com/users', user)
//     .then(val => console.log(val))
//     .catch(er => console.log(er))

//Update single User on Server
http.put('https://jsonplaceholder.typicode.com/users/1', user)
    .then(val => console.log(val))
    .catch(err => console.log(err))