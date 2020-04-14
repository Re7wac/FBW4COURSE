// //add export befor declaration
// let greeting = 'welcome back';

// function hi(user) {
//     return `${greeting} ${user} in Javascript Model`
// }

//add export after declaratio

// export {
//     greeting,
//     hi
// }

// export function sqr(num) {
//     return num * num
// }

// export default function sqr(num) {
//     return num * num
// }

// export function square() {
//     return 'I am here to make problem'
// }

// export function makeElement(tagName, text, background) {
//     let el = document.createElement(tagName);
//     el.append(text);
//     el.style.background = background;
//     el.style.color = '#fff';
//     el.style.height = '100px';
//     el.style.width = '40vw';
//     document.body.append(el)
// }

// let UL = document.createElement('ul')
function delet() {
    
}

function creatUser(userName) {
    let li = document.createElement('li')
    li.innerHTML = userName

    document.body.append(li)
}