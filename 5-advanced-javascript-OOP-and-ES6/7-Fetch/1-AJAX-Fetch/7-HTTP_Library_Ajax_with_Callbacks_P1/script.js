const http = new easyHTTP;

http.get()
    .then(function (data) {
        console.log(data)
        let output = ''
        output +=
            ``
             
document.getElementById('output').innerHTML=output
    })
.catch(err=> console.log('You Faild'))



// function callback(err, response) {
//     let div = document.createElement('div')
//     if (err) {
//         // console.log(err)
//         div.innerHTML = err
        
        
//     } else {
//         // console.log(response)
//         let data = JSON.parse(response)
//         let html = `<li>${data.userId}</li>
//                     <li>${data.title}</li>
//                     <li>${data.body}</li>`
//         div.innerHTML = html

//         //response.valet output =''lue.forEach(function (item) {
//         //output += `<li>${item.joke}</li>`
//         //})
//     }
//     document.body.appendChild(div)

// }

// //Get Posts
// http.get('https://jsonplaceholder.typicode.com/posts/1', callback)