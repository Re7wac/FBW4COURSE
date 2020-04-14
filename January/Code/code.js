console.log('Hello')

a = [1, 2, 3, 4]
console.log(...a)

b = 'DCI'
console.log(...b)

c = [...a, ...b, 'coding']
console.log(c)

let fruits = {
    orange: 'Orange',
    apple: 'Apple'
}
let o = {
    ...fruits
}
console.log(o)

let d = [...a]

d.push(5)
console.log(d)

function arraylength(a) {
    return `The length of the array is ` +
        a.length
}

console.log(arraylength(...a))

function sum(a, b, c) {
    return a + b + c
}

console.log(sum(a))