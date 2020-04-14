let x =Array.from(document.querySelectorAll('li'))
console.log(x[0].children[0])
x.forEach(function (item) {
    item.children[0].addEventListener('click', function () {
        // e.target.parentElment.parentElment.removeChild(x[i]);
        console.log(item)
        item.remove()
    })
})
