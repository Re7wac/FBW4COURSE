document.getElementById('btn').addEventListener('click', myFunc)

function myFunc(e) {
    let text = document.getElementById('text').innerText
    if (text)
        document.getElementById('text').innerText = ''
    else {
        document.getElementById('text').innerText = 'This is a Test'
    }
}

