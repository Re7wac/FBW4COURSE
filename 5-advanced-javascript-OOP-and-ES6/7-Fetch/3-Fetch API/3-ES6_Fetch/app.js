document.getElementById('button1').addEventListener('click', getText)

document.getElementById('button2').addEventListener('click', getJson)

document.getElementById('button3').addEventListener('click', getApi)

//get local text fiel data
function getText() {
    fetch('local.txt')
        .then((res) => {
            return res.text()

        })
        .then((data) => {
            console.log(data)
            document.getElementById('output').innerHTML = data
        })

    // The PromisesStatus will stay "resolved" even if there is an error because we are getting from LOCAL DATA file, only SERVER can change automaticaly the promisesStatus into "rejected" when there is an Error
    // .catch((err) => {
    //     console.log(err)
    // })
}

//get local text fiel data

function getJson() {
    fetch('local.json')
        .then((res) => {
            return res.json()

        })
        .then((data) => {

            // data = JSON.parse(data)
            console.log(typeof data)
            let output = ''
            data.forEach(item => {
                output += `<li>${item.title}</li>`
            })

            document.getElementById('output').innerHTML = output
        })

    // The PromisesStatus will stay "resolved" even if there is an error because we are getting from LOCAL DATA file, only SERVER can change automaticaly the promisesStatus into "rejected" when there is an Error
    // .catch((err) => {
    //     console.log(err)
    // })
}

//get data from External API
function getApi() {
    fetch('https://api.github.com/users')
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            console.log(typeof data)
            let output = ''
            data.forEach(item => {
                output += `
                    <ul>
                    <li>${item.id}</li>
                    <li>${item.login}</li>
                    </ul>`
            })

            document.getElementById('output').innerHTML = output

        })

        //Only server can change the promise ito rejected
        .catch((err) => {
            console.log(err)
        })
}