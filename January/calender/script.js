// tbl = document.getElementById("calendar-body");

// // let firstDay = (new Date(year, month)).getDay();


// function daysInMonth(month, year) {
//     new Date(year, month).getDate();
//     return new Date
// }

// function fillDays() {


//     let tdls = [];
//     let trs = tab.children

//     for (i = 0; x < trs.length; i++){
//         // console.log(trs(i).children

//         for (y = 0;y<)
//     }

// }



let tab = document.getElementById('calendar-body');

Btn = document.getElementById("previous");


//console.log(firstDay)
function getDays(month, year) {
    // let firstDay = (new Date(year, month)).getDay();
    return new Date(year, month, 0).getDate();
}

function fillDays() {
    // console.log(getDays(1,2020))

    let allTds = []
    let trs = tab.children
    //console.log(trs[0].children[0])
    for (x = 0; x < trs.length; x++) {
        //console.log(trs[x].children)
        for (k = 0; k < trs[x].children.length; k++) {
            // console.log(trs[x].children)
            allTds.push(trs[x].children[k])


        }
    }

    //console.log(allTds)
    for (i = 3; i <= getDays(1, 2020) + 2; i++) {

        allTds[i].appendChild(document.createTextNode(i - 2))






    }
}
fillDays()


tab.addEventListener('click', function (e) {
    let closestE = e.target.closest('td')
    closestE.style.backgroundColor = 'red'
    let num = parseInt(closestE.innerText)
    if (num % 2 != 0) {
        closestE.style.backgroundColor = 'red'
    } else  {
        closestE.style.backgroundColor = 'green'
    }
   
    Btn.addEventListener('click', function () {
        console.log(num)
        if (num % 2 != 0) {
            alert('This day is reservd')
        }
    })


})