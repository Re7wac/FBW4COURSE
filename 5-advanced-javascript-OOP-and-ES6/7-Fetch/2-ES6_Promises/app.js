// let promise = new Promise(function (resolve, reject) {
//     //executor (the producing code'the singer give his result')


// })

// let myFirstPromise = new Promise((resolve, reject) => {
//     // We call resolve(...) when what we were doing asynchronously was successful, and reject(...) when it failed.
//     // In this example, we use setTimeout(...) to simulate async code. 
//     // In reality, you will probably be using something like XHR or an HTML5 API.
//     setTimeout(function () {
//         resolve("Success!") // Yay! Everything went well!
//     }, 250)
// })

// myFirstPromise.then((successMessage) => {
//     // successMessage is whatever we passed in the resolve(...) function above.
//     // It doesn't have to be a string, but if it is only a succeed message, it probably will be.
//     console.log("Yay! " + successMessage)
// });


// let promise = new Promise(function (resolve, reject) {
//     //the function is executed automaticlly when the promise is constructed

//     //After one secound the job is done woth result 'done'
//     // setTimeout(() => resolve('done'), 1000)
//     setTimeout(() => reject(new Error("Ooooooh!!")), 1000)


// })

// console.log(promise)


//resolve runs the first function in  .then
// let promise = new Promise(function (resolve, reject) {


//     setTimeout(() => reject(new Error("Ooooooh!!")), 1000)


// })
// promise.then(
//     result => alert(result), //shows 'done' after one secound

//     error => alert(error)
// )
// // console.log(promise)


const posts = [{
        title: 'Post one',
        body: 'This is post one'
    },
    {
        title: 'Post tow',
        body: 'This is post tow'
    }
]

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            const error = true;
            if (!error) {
                resolve()
            } else {
                reject('Error : Somthing Fucked You Up !*°^°*!')
            }
        }, 1000)
    })
}



// function get Posts

function getPosts() {
    setTimeout(function () {
        let output = ''
        posts.forEach(item => output += `<li>${item.title}</li>`)
        document.body.innerHTML = output
    }, 1000)
}

createPost({
    title: 'Post three',
    body: 'This is post three'
}).then(getPosts).catch(function (err) {
    console.log(err)
})