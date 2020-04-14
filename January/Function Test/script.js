// function calculateAge(birthyear) {
//     return 2020 - birthyear;
// }
// let ageJon = calculateAge(1990)

// console.log(ageJon)


// const getAge = birthDate => Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e+10)

// // today is 2018-06-13
// getAge('1994-06-14') // 23
// getAge('1994-06-13') // 24

let list = ['Kebab', 'Pasta', 'Pizaa', 'Soup'];


let gustes = [
    Guste1 = {
        name: 'John',
        fav: 'Fish'
    },
    Guste2 = {
        name: 'Peter',
        fav: 'Pasta'
    },
    Guste3 = {
        name: 'Mustfa',
        fav: 'غاتو عليه صورة'
    }

]

const ul = document.getElementById('list')

function wehave(list, gustes) {
    let result = ''
    gustes.forEach(function (item) {
        //    console.log(item)
        if (list.includes(item.fav)) {
            let li = document.createElement('li')
            li.textContent = `We have ${item.fav} for ${item.name}\n`
            ul.appendChild(li)
        } else {
            let li = document.createElement('li')
            li.textContent = `We Don't Have ${item.fav} for ${item.name}\n `
            ul.appendChild(li)
        }

    })

    return result
}
console.log(wehave(list, gustes))

