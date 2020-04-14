// const item = document.querySelector('ul');


// item.addEventListener('dblclick', runEvent)

// function runEvent(e) {

// item.textContent
// }



// const card = document.getElementsByTagName('ul');

// card.addEventListener('dblclick', function (e) {
//     card.classList.toggle('large');
//     document.ul.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY},${Math.random()},225)`
// });



// var allLis = document.getElementsByTagName("ul ,li");

// for (i = 0; i < allLis.length; i++) {
//     allLis[i].ondblclick = function () {
//         this.style.color = "blue";
//     }
// }
// // document.li.addEventListener('click', function (e) {
// //     var self = this,
// //         old_bg = this.style.background;

// //     this.style.background = this.style.background == 'green' ? 'blue' : 'green';
// //     setTimeout(function () {
// //         self.style.background = old_bg;
// //     }, 1000);
// // })





let a = document.querySelectorAll('li')
for (i = 0; i < a.length; i++) {
    a[i].addEventListener('click', runEvent)
    a[i].addEventListener('dblclick', runEvent)
}
console.log(a)

function runEvent(e) {
    a.forEach(function (item) {
        if (e.type == 'click') {
            e.target.style.backgroundColor = 'green'
            item.style.backgroundColor = 'white'
        } else if (e.type == 'dblclick') {
            event.target.style.backgroundColor = 'white'
        }
    })
}